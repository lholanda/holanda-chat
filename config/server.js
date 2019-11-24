/* importar o modulo do express */
const express = require( 'express' );

/* importar o modulo do consign */
const consign = require( 'consign' );

/* importar o modulo do body-parser */
const bodyParser = require( 'body-parser' );

/* importar o modulo do express-validator@5.3.1 */
const expressValidator = require( 'express-validator' );

/* Iniciar o objeto app - variavel principal do aplicativo (app) */
const app        = express();

/* Iniciar o objeto app - variavel principal do aplicativo (app) */
const ejs        = require( 'ejs' );

/* Setar as variaveis 'views engine' e 'views' do express */
app.set( 'view engine', 'ejs' );
app.set( 'views', './app/views' );

/* Configurar o middleware express.static */
app.use( express.static( './app/public' ) );

/* Configurar o middleware body-parser */
app.use( bodyParser.urlencoded( { extended: true } ));  // json a partior de um form

/* Configurar o middleware express-validator */
app.use( expressValidator() );

/* efetuar autoload das rotas, controllers e models para o objeto (app)*/
consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .into(app);

/*  Exportar objeto app */
module.exports = app;

