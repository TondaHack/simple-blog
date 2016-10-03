FROM mhart/alpine-node:latest

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]