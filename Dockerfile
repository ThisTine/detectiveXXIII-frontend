FROM node:16.15-alpine3.16 AS reactbuilder

WORKDIR /detectivexiiifrontend

COPY . .

RUN npm install

RUN npm run build

FROM golang:alpine as serverbuilder

WORKDIR /detectivexiiifrontend/server

COPY ./server .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build

FROM alpine

WORKDIR /detectivexiiifrontend/server

COPY --from=reactbuilder  /detectivexiiifrontend/dist/ ./static/

COPY --from=serverbuilder /detectivexiiifrontend/server/detectivexiiiserver .

EXPOSE 4000

ENTRYPOINT [ "/detectivexiiifrontend/server/detectivexiiiserver" ]