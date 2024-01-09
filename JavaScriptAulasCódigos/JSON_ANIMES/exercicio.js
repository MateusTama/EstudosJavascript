//OPERAÇÕES CRUD
//LER

let jsonString;
try{
    const fs = require("fs") //biblioteca FS (filestring) - manipular arquivos
    //__dirname = diretório
    jsonString = fs.readFileSync(__dirname + "/BD_animes.json") //READ = LER OS ARQUIVOS DE FORMA SÍNCRONA
} catch(erro) {
    console.log("Ocorreu algum erro ao ler o arquivo: ", erro)
    return
}

// console.log("ListaAnimes: ")
//Converte de JSON string para Array de Objetos
//Classe JSON manipula arquivos JSON
const listaAnimes = JSON.parse(jsonString)
// console.log(typeof listaAnimes)

//ORDENA DECRESCENTE (pior para melhor)
listaAnimes.sort((anime1, anime2) => anime1.rate-anime2.rate)
//CORTA A PARTIR DO 1 ANIME 
//DIFERENÇA ENTRE SPLICE E SLICE
listaAnimes.splice(1)
console.log(listaAnimes)


//FUNÇÃO PARA PEGAR A MAIOR NOTA

// let animeMaiorNota;
// let maiorNota = 0;
// for (anime of listaAnimes) {
//     console.log(anime)
//     notaAnime = anime.rate
//     if (parseFloat(notaAnime) > parseFloat(maiorNota)) {
//         maiorNota = anime.rate
//         animeMaiorNota = anime
//     }
// }

// console.log("ANIME COM MAIOR NOTA:")
// console.log(animeMaiorNota)