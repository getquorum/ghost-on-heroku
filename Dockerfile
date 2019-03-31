FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g nodemon
RUN npm install

EXPOSE 443
EXPOSE 80
EXPOSE 2368
EXPOSE 8080

CMD ["npm", "start"]