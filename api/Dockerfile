FROM alpine:latest
RUN apk update
RUN apk add nodejs-lts --update
ADD kong_setup.js kong_setup.js
ADD api.js api.js
ADD node_modules node_modules
CMD node api.js
