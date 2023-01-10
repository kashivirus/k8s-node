FROM node:alpine

WORKDIR /app


EXPOSE 3010


COPY package-lock.json package.json ./

RUN npm install

COPY . .

CMD ["npm" , "start"]