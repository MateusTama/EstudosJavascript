
import express from 'express'
import rotasEstudante from './controle/ctrEstudante.js'
/*
Este é o arquivo inicial da API.
Nele, o servidor express é chamado,configurado, e iniciado.
Obs.: dependendo da versão utilizada, talvez seja necessário
colocar manualmente o seguinte atributo no package.json:
"type": "module",
*/

//Carregando/instanciando a aplicação
const appServidorExpress = express()
//Definindo porta para receber requisições
const PORTA_HTTP = 8000

/*
Configurações relativos ao tratamento de dados no formato
JSON:
*/
// parse requests of content-type - application/json
appServidorExpress.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
appServidorExpress.use(express.urlencoded({ extended: true }));
//Usar rota criada no controle de rotas para  o objeto Estudante
appServidorExpress.use(rotasEstudante)



//Iniciando servidor
appServidorExpress.listen(PORTA_HTTP,()=>{
    console.log('Servidor Express rodando na porta ',PORTA_HTTP);
})
//Recebendo requisições na Home
appServidorExpress.get("/", (req, res, next) => {
    res.json({
        "mensagem":"Olá",
        "descrição": "Requisição recebida via HTTP Get na raíz (root) da API"

    })
});

// Default response for any other request
appServidorExpress.use(function(req, res){
    res.status(404);
});

