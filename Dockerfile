FROM spujadas/swagger-editor-docker

RUN mkdir -p /app
COPY . /app
WORKDIR /app

EXPOSE 8080

RUN npm install

CMD [ "npm", "start" ]