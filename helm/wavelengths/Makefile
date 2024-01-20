.PHONY: all test clean


name ?= wavelengths
image ?= wavelengths
port ?= ${APP_PORT}
tag ?= $(shell grep 'appVersion:' Chart.yaml | cut -f 2 -d' ')
SHELL := /bin/bash

ifeq ($(env),dev)
	context = ${DEV_CONTEXT}
	namespace = ${DEV_NAMESPACE}
else ifeq ($(env),prod)
	context = ${PROD_CONTEXT}
	namespace = ${PROD_NAMESPACE}
endif

package:
		helm package .

helm/context:
	kubectl config use-context $(context)

## Install Helm chart
helm/install: helm/context
	cd helm/wavelengths && \
	helm upgrade --install $(name) . \
	--namespace $(namespace) \
	--set global.env=$(env) \
	--set image.tag=$(image_tag) \
	--debug
	sleep 5

template:
		helm template . \
			--name-template=$(name) \
			--namespace $(namespace) \
			--set global.env=$(env) \
			--debug

## Forward port to service
helm/pf: helm/context
		kubectl port-forward --namespace $(namespace) svc/$(name) $(port):$(port)

## Stop port forwarding
helm/stop_pf: helm/context
	./scripts/stop_port_forward.sh $(port)

## Get pod logs
helm/logs: helm/context
	./scripts/get_pod_logs.sh $(namespace) $(name) || true

## Create chart schema
helm/schema_create:
	cd helm/wavelengths && helm schema-gen values.yaml > values.schema.json

## Delete helm installation
helm/uninstall:
	./scripts/stop_port_forward.sh $(port) && \
	kubectl config use-context $(context) && \
		helm uninstall --namespace $(namespace) $(name) || true
