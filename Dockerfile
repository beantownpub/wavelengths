FROM --platform=linux/amd64 node:20.9.0-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM --platform=linux/amd64 build AS install
ARG git_hash
ARG version
ARG node_env
ENV NODE_ENV=${node_env}
ENV GIT_HASH=${git_hash}
ENV VERSION=${version}

COPY ./package* /app/
COPY ./.npmrc /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./

RUN npx webpack --config webpack.config.cjs && \
    rm -rf node_modules

FROM --platform=linux/amd64 node:20.9.0-buster-slim

ENV TINI_VERSION v0.19.0

RUN apt-get update && apt-get install -y curl
COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
RUN chown -R node:node /app/dist/public/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]
EXPOSE 3077
USER node
CMD ["npm", "run", "start"]
