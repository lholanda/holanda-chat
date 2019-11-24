/* Exportar as rotas */
module.exports = function(app){
    // rota home
    app.get('/', function(req, res){
        app.app.controllers.index.home(app , req, res);
    })
}