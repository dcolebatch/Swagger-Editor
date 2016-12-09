FROM swaggerapi/swagger-editor

RUN mkdir -p /app
COPY . /app
WORKDIR /app

EXPOSE 8080

RUN npm install

CMD [ "npm", "start" ]