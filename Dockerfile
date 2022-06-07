FROM node:alpine
RUN mkdir -p /usr/src/calc
WORKDIR /usr/src/calc
COPY . .
RUN npm install
EXPOSE 80
CMD [ "node", "calculator.js" ]