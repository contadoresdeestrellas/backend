FROM node:8

# App directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "node" , "app.js" ]


