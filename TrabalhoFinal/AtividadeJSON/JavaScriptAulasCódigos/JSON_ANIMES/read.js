//SITE: kaggle.com

//OPERAÇÕES CRUD

let jsonString;
try{
    const fs = require("fs") //biblioteca FS (filestring) - manipular arquivos
    //__dirname = diretório
    jsonString = fs.readFileSync(__dirname + "/BD_animes.json") //READ = LER OS ARQUIVOS DE FORMA SÍNCRONA
    
} catch(erro) {
    console.log("Ocorreu algum erro ao ler o arquivo: ", erro)
    return
}

console.log("ListaAnimes: ")
//Converte de JSON string para Array de Objetos
//Classe JSON manipula arquivos JSON
const listaAnimes = JSON.parse(jsonString)
console.log(listaAnimes)