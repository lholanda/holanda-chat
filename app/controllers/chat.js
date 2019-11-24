/*!
 * controllers/chat.js
 * (c) 2019-2020 Luiz Roberto Holanda
 * Objetivo : Inicia o Chat mas antes valida os dados - no caso, Nome ou Apelido, se houver erros,
 *            renderiza o 'index' e exibe os erros
 */
module.exports.iniciaChat = function(app, req, res){
    const dadosForm = req.body;
    //console.log(dadosForm);    console.log(dadosForm.apelido);    console.log('apelido');

    req.assert('apelido', 'Nome ou apelido é obrigatório !!!').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 a 15 caracteres !!!').len( 3,15 );

    const erros = req.validationErrors();

    //console.log(erros);

    if(erros){
        //res.send('Existem erros no formulário !!!');
        console.log('Existem erros no formulário !!!');
        res.render('index', {validacao: erros, dados: dadosForm})
        return;
    }

    // LADO SERVIDOR - usa-se EMIT (emite a msg)
    app.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: 'Acabou de entrar no chat.'}
    )
    // caso não tenha nehum erro, renderiza o chat normalmente
    res.render('chat', { dadosForm: dadosForm})
}

