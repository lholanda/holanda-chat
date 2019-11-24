/* Exportar as rotas */
module.exports = function(app){
    /* exibir pagina Noticias */
    app.get('/noticias', function(req, res){
        res.send('página Noticias')
    })

    /* exibir pagina Noticias */
    app.get('/noticia', function(req, res){
        res.send('página Noticia')
    })
}