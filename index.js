'use strict';

const koa = require('koa');
var mount = require('koa-mount');
const swagger = require('koa-swagger-editor');
var serve = require('koa-static');

const server = koa()
	.use(mount('/export', serve('.')))	
    .use(swagger({
		defaults:{
		  useYamlBackend:false
		},
        statics: '/editor', // path to swagger-editor source
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