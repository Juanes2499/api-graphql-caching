FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

USER node

RUN npm config set registry https://registry.npmjs.org/

RUN npm install -f

COPY --chown=node:node . .

EXPOSE 4001

CMD [ "node", "./src/index.js" ]