FROM node:latest-alpine
WORKDIR /app
RUN apk add fish
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 5173
CMD [ "npm", "run", "dev", "--", "--host" ]
