FROM node:10-alpine as builder
WORKDIR /app
COPY . /app
RUN yarn install && yarn build
COPY . /app
EXPOSE 3000
CMD ["yarn", "run", "start"]