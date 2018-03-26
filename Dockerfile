FROM node:latest

EXPOSE 3000

RUN mkdir -p /ui
WORKDIR /ui

COPY . /ui

RUN npm install

CMD npm run dev