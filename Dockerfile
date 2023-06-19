# ==== CONFIGURE =====

FROM node:16-alpine as builder

WORKDIR /app

COPY ./web .

ENV NODE_ENV production


CMD ["npm", "run", "start"]