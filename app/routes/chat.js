/*!
 * routes/chat.js
 * (c) 2019-2020 Luiz Roberto Holanda
 * Objetivo : Exportar as rotas, via post (formulario) ou diretamente via get
 */

module.exports = function(app){
    /* exibir pagina chat via post */
    app.post('/chat', function(req, res){
        app.app.controllers.chat.iniciaChat(app , req, res);
    })

     /* exibir pagina chat via get */
     app.get('/chat', function(req, res){
        app.app.controllers.chat.iniciaChat(app , req, res);
    })
}