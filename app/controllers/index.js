module.exports.home = function(app, req, res){
    //console.log("aqui controllers");
    //console.log('Desenvolvedor : '+app.get('meunome'));
    res.render('index', {validacao: {}, dados: {}}); // posso colocar dentro de diretorios tambem se quiser  
}