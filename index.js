'use strict';

const koa = require('koa');
var mount = require('koa-mount');
const swagger = require('koa-swagger-editor');
var serve = require('koa-static');

const server = koa()
	.use(mount('/export', serve('.')))	
    .use(swagger({
        statics: __dirname + '/swagger-editor/dist', // path to extracted swagger-editor.zip
        specFile: __dirname + '/swagger.yaml' // where we want to save our api specs
    }))		
    .listen(8080);
    
console.log('Listening on 0.0.0.0:8080');

process
    .on('SIGINT', function() {
  server.close();
  process.exit( );
})
    .on('SIGTERM', function() {
  server.close();
  process.exit( );
})