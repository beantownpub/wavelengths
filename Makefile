.PHONY: all test clean

name ?= wavelengths
dockerhub ?= jalgraves
image_name ?= wavelengths
port ?= 3077
version ?= $(shell jq -r .version package.json | tr -d '"')
hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(hash)
	node_env = development
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
endif

context:
	kubectl config use-context $(context)

sass:
		sass ${PWD}/src/static/sass/wavelengths.sass ${PWD}/dist/public/css/style.css

stop:
		docker rm -f $(image_name) || true

build: sass
	docker build \
		-t $(image_name):$(image_tag) \
		--build-arg google_api_key=${GOOGLE_API_KEY} \
		--build-arg node_env=$(node_env) .

publish: build
		docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
		docker push $(dockerhub)/$(image_name):$(image_tag)

latest:
		docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):latest
		docker push $(dockerhub)/$(image_name):latest

exec_pod: context
	${HOME}/github/helm/scripts/exec_pod.sh $(env) $(name)

kill_pod: context
	${HOME}/github/helm/scripts/kill_pod.sh $(env) $(name)

kill_port_forward: context
	${HOME}/github/helm/scripts/stop_port_forward.sh $(port)

redeploy: build restart

restart: kill_pod kill_port_forward
