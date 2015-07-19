FROM node:0.10

ADD . /code
WORKDIR /code
RUN rm -rf node_modules && npm install
CMD DB_CONNECTION="mongodb://${MONGO_1_PORT_27017_TCP_ADDR}/test" ./node_modules/.bin/mocha test
