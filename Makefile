-include helm/wavelengths/Makefile
.PHONY: all test clean
export MAKE_PATH ?= $(shell pwd)
export SELF ?= $(MAKE)

MAKE_FILES = ${MAKE_PATH}/helm/wavelengths/Makefile ${MAKE_PATH}/Makefile

dockerhub ?= jalgraves
image_name ?= wavelengths
port ?= 3037
version ?= $(shell jq -r .version package.json | tr -d '"')
git_hash = $(shell git rev-parse --short HEAD)

ifeq ($(env),dev)
	image_tag = $(version)-$(git_hash)
	node_env = development
else ifeq ($(env), prod)
	image_tag = $(version)
	node_env = production
endif

## Install pre-commit hooks
pre-commit/install:
	pre-commit install --install-hooks --allow-missing-config -t pre-commit -t prepare-commit-msg

sass:
	sass ${PWD}/src/static/sass/wavelengths.sass ${PWD}/dist/public/css/style.css

## Build docker image
build: sass
	docker build \
		--platform linux/x86_64 \
		-t $(image_name):$(image_tag) \
		--build-arg aws_region=${AWS_DEFAULT_REGION} \
		--build-arg node_env=$(node_env) \
		--build-arg git_hash=$(git_hash) \
		--build-arg version=$(version) .

publish: build
	docker tag $(image_name):$(image_tag) $(dockerhub)/$(image_name):$(image_tag)
	docker push $(dockerhub)/$(image_name):$(image_tag)

latest:
	docker tag $(image_name):$(version) $(dockerhub)/$(image_name):latest
	docker push $(dockerhub)/$(image_name):latest

## Start docker container
docker/run:
	docker run \
		--rm \
		--name $(image_name) \
		-p $(port):$(port) \
		-e GIT_HASH="${git_hash}" \
		-e VERSION="${version}" \
		$(image_name):$(image_tag)

## Stop docker container
docker/stop:
	docker rm -f $(image_name)

## Update to latest version of @jalgraves/react-components-library
jal/update:
	npm i --save-dev @jalgraves/react-components-library

clean:
	rm -rf node_modules/

## Show available commands
help:
	@printf "Available targets:\n\n"
	@$(SELF) -s help/generate | grep -E "\w($(HELP_FILTER))"
	@printf "\n\n"

help/generate:
	@awk '/^[a-zA-Z\_0-9%:\\\/-]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = $$1; \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			gsub("\\\\", "", helpCommand); \
			gsub(":+$$", "", helpCommand); \
			printf "  \x1b[32;01m%-35s\x1b[0m %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKE_FILES) | sort -u

# Silence make output
# MAKEFLAGS += -s
