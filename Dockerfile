# ==== CONFIGURE =====

FROM node:16-alpine as builder

RUN npm install -g sass

WORKDIR /app

COPY ./web .

ENV NODE_ENV production


CMD ["npm", "run", "start"]