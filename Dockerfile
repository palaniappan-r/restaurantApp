FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# For production
# RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]