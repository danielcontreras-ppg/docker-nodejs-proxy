FROM node:alpine
RUN mkdir -p /usr/src/api-proxy
WORKDIR /usr/src/api-proxy
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]