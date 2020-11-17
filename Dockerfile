FROM node:10-alpine as builder
WORKDIR /app
COPY . /app
RUN yarn install && yarn build

FROM nginx:alpine
COPY ./.config/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]