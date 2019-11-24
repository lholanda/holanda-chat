/*
    Aplicação : multiroom-chat
    Autor     : Luiz Roberto Holanda
    Data      : 22/11/2019
*/

// importar a configuração do servidor
const app = require('./config/server');
// importar a configuração do socket.io
//const socketIo = require('socket.io');

// parametrizar a porta de escuta do servidor
var server = app.listen( 8000, function( req, res){
    console.log('Servidor ON ::: < Rodando na porta : 8000 > :::');
})

/* O servidor lê http e socket.io na mesma porta = 8000*/
var io = require('socket.io').listen(server);

/* CRIADA variavel io (será global) dentro do app e poderei recuperar onde eu quiser */
app.set('io', io );
app.set('meunome','Luiz Holanda'); // esta tambem é valida

/* criar a conexao por websocket */
io.on('connection', function(socket){
    console.log('Usuario conectou');
    
    // detecta que o usuario desconectou
    socket.on('disconnect', function(){
        console.log('Usuario desconectou');
    })

    // recebe e exibe a mensagem vinda do usuario 'msgParaServidor' e emit na mesma hora para os clientes 'msgParaCliente'
    socket.on('msgParaServidor', function(data){
        /*!
         dialogos 
        */
        // reenvia para quem enviou para o servidor
        socket.emit(
            'msgParaCliente', 
            {apelido: "eu", mensagem: data.mensagem})
        // reenvia para todos menos para quem enviou para o servidor
        socket.broadcast.emit(
            'msgParaCliente', 
            {apelido: data.apelido, mensagem: data.mensagem})
        /*!
         participantes 
        */
       // para forcar que vai comparar com mesmo com inteiro 
       if(parseInt( data.apelido_atualizado_nos_clientes ) == 0){
          socket.emit(
            'participantesParaCliente', 
            {apelido: data.apelido})
    
          socket.broadcast.emit(
            'participantesParaCliente',  
            {apelido: data.apelido, mensagem: data.mensagem})
       }     
    })
})

