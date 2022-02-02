FROM node:16

WORKDIR /soymarket/
COPY ./package.json /soymarket/
COPY ./yarn.lock /soymarket/
RUN yarn install

COPY . /soymarket/
RUN yarn build:ssr

CMD yarn start