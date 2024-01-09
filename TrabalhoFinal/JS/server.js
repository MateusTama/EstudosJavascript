
import express from 'express'
import rotasEstudante from './controle/ctrLivros.js'
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
appServidorExpress.get("/", (req, res, next) => { //GET
    res.json({
        "mensagem":"Olá",
        "descrição": "Requisição recebida via HTTP Get na raíz (root) da API"

    })
});

// Default response for any other request
appServidorExpress.use(function(req, res){
    res.status(404);
});

// TESTES

// {
//     "titulo": "Metafísica",
//     "autor": "Aristóteles",
//     "isbn": "978-8572838115",
//     "nota": 9.3
// }
// {
//     "titulo": "Apologia de Sócrates",
//     "autor": "Platão",
//     "isbn": "978-8552100669",
//     "nota": 8.7
// }
// {
//     "titulo": "Assim falou Zaratustra",
//     "autor": "Friedrich Nietzsche",
//     "isbn": "978-8572328562",
//     "nota": 9.7
// }
// {
//     "titulo": "Os sofrimentos do Jovem Werther",
//     "autor": "Johann Wolfgang von Goethe",
//     "isbn": "978-8582851401",
//     "nota": 8
// }
// {
//     "titulo": "O que há de errado com o mundo?",
//     "autor": "Gilbert Keith Chesterton",
//     "isbn": "978-8563160287",
//     "nota": 9.5
// }
// {
//     "titulo": "Guia politicamente incorreto da filosofia",
//     "autor": "Luiz Felipe Pondé",
//     "isbn": "978-8580444384",
//     "nota": 8.8
// }