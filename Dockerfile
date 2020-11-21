

FROM node:12

RUN mkdir /usr/src/app

ADD . /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
