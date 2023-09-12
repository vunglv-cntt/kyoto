FROM node:16-alpine
EXPOSE 3232

RUN apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
CMD ["npm", "run", "start:dev"]
