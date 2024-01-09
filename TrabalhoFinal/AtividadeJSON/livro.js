//Tema: Livros 
//Equipe: Mateus Tamasia e Eduardo Kohler

// Operações CRUD (Read e Write)
// Leitura JSON

// "Importa" a bibliote FS como escopo global (fora do try)
const fs = require("fs"); //biblioteca FS (filestring) - manipular arquivos
const { type } = require("os");
const { PassThrough } = require("stream");

// Cria a variável jsonString
let jsonString;
try{
    //__dirname = diretório atual
    // Declara jsonString como o arquivo JSON (file)
    jsonString = fs.readFileSync(__dirname + "/livros.json") //READ = LER OS ARQUIVOS DE FORMA SÍNCRONA
    
} catch(erro) {
    // Caso ocorra algum erro
    console.log("Ocorreu algum erro ao ler o arquivo: ", erro)
    return
}

console.log("Lista de Livros: ")
//Converte de JSON string para Array de Objetos, para poder manipular via NodeJS
//Classe JSON manipula arquivos JSON
const listaLivros = JSON.parse(jsonString)
// Imprime a lista de livros JSON
console.log(listaLivros)

// EFETUAR MUDANÇAS

// Função Efetuar Mudanças
// Função que vai "salvar" (sobrescrever) as mudanças feitas na lista de livros no arquivo JSON
function efetuarMudancas() {
        // Sobrescreve o JSON com a nova lista de livros (após ter adicionado o novo livro)
        // Converte o Formato de objetos Javascript para String JSON (formato JSON)
        const novaListaLivros = JSON.stringify(listaLivros)
        // Sobrescreve a novaListaLivros
        // fs.writeFileSync(__dirname + "/ola.json", novaListaLivros) = Cria um novo arquivo JSON
        fs.writeFileSync(__dirname + "/livros.json", novaListaLivros)
}

// BUSCADOR (ISBN)

console.log()

// Função para buscarLivro pela ISBN
function buscarLivro(isbn) {
    let livroEncontrado = false
    let indice = 0
    let indiceLivroEncontrado = "nenhum"
    // Para cada livro na listaLivros (Array de Objetos)
    for (let livro in listaLivros) {
        // Incrementa 1 no indice
        indice += 1
        // Se o ISBN de um objeto livro da listaLivros for igual ao ISBN passado na função e se a variável livroEncontrado for igual a false, entra no if
        if ((listaLivros[livro].ISBN == isbn) && (livroEncontrado == false)) {
            // Imprime que o livro foi encontrado e atualiza o valor da variavel livroEncontrado para true
            console.log("O livro foi encontrado - Função Buscar Livro")
            // Declara a variável com o índice do livro encontrado
            indiceLivroEncontrado = livro
            livroEncontrado = true
        }
        // Caso a lista de livros tenha acabado e o livro não tenha sido encontrado
        else if ((listaLivros.length == indice) && (livroEncontrado == false)) {
            // Imprime que o livro não foi encontrado
            console.log("O livro não existe - Função Buscar Livro")
        } 
    }
    // Retorna true ou false, dependendo se o livro foi encontrado ou não
    // Retorna através de um array (passar mais de 1 valor)
    // Retorna o indice do livro encontrado
    return [livroEncontrado, indiceLivroEncontrado]
}

// ISBN: Stuart Hall
buscarLivro("978-8583160076")
console.log()

// ADICIONANDO UM NOVO LIVRO

novoLivro = 
{
    "titulo":"O Príncipe",
    "autor":"Nicolau Maquiavel",
    "ISBN":"978-8572839044",
    "nota": 6
}

// Função para adicionar um novo livro

function adicionarLivro(novoLivro){
    // Utiliza a função buscarLivro, que verifica atráves do ISBN se o livro que pretendemos adicionar já está no Array de Objetos.
    const resultado = buscarLivro(novoLivro.ISBN) //Os valores retornados pela função são declarados na variável resultado
    // Pega o primeiro valor do Array retornado na variável resultado
    // true ou false 
    let livroDuplicado = resultado[0]
    // Caso tenha livro duplicado ele não adiciona
    if (livroDuplicado == true) {
        console.log("Não é possível adicionar, já existe um livro com este ISBN - Função Adicionar Livro")
    }     
    // Se não tiver livro duplicado ele adiciona através da função PUSH
    else if (livroDuplicado == false) {
        // Pega a lista de livros, que já está no Formato de objetos Javascript 
        // Adiciona um novo livro na lista de livros    
        listaLivros.push(novoLivro)
        // Imprime a nova lista de livros no console
        console.log()
        console.log("Lista de livros atualizada - Função Adicionar Livro")
        console.log(listaLivros)
        // Chama a função efetuar mudanças que salva as alterações feitas no arquivo JSON
        efetuarMudancas()
    }
}

// Chama a função passando como parâmetro o novo livro
adicionarLivro(novoLivro)
console.log()

//ANOTAÇÕES: novaListaLivros.pop() = remove o último elemento do array

// EXCLUSÃO DE UM LIVRO PELA ISBN

// Função para excluir livro a partir do ISBN
function excluirLivro(isbn) {
    // Utiliza a função buscarLivro, que verifica atráves do ISBN se o livro que pretendemos excluir existe no array de objetos
    const resultado = buscarLivro(isbn) //Os valores retornados pela função são declarados na variável resultado
    // Pega o primeiro valor do Array retornado na variável resultado
    // true ou false 
    let livroEncontrado = resultado[0]
    // Pega o segundo valor do Array retornado na variável resultado
    // índice do livro
    let livro = resultado[1]
    // Se o livro existir, excluímos ele
    if (livroEncontrado == true) {
        // Método splice que exclui a partir do índice do livro apenas 1 objeto, no caso, ele mesmo
        listaLivros.splice(livro,1)
        // Imprime no console.log avisando que o livro foi excluído
        console.log("Livro excluído - Função Excluir Livro")
        // Imprime a nova lista de livros
        console.log("Lista de livros atualizada - Função Excluir Livro")
        console.log(listaLivros)
    }
    // Caso não existe retornados uma mensagem no console.log informando que o livro não foi encontrado
    else{
        console.log("Livro não encontrado. - Função Excluir livro")
    }
}

// Chama a função excluir livro, passando como parâmetro o ISBN
// ISBN: Gilbert Keith Chesterton
excluirLivro("978-8563160287")
console.log()

// ALTERAR UM REGISTRO

// Função alterar livro
function alterarLivro(isbn, novoTitulo, novoAutor, novoISBN, novaNota) {
    // Utiliza a função buscarLivro, que verifica atráves do ISBN se o livro que pretendemos excluir existe no array de objetos
    const resultado = buscarLivro(isbn) //Os valores retornados pela função são declarados na variável resultado
    // Pega o primeiro valor do Array retornado na variável resultado
    // true ou false 
    let livroEncontrado = resultado[0]
    // Pega o segundo valor do Array retornado na variável resultado
    // índice do livro
    let livro = resultado[1]
    // Se o livro existir, alteramos as suas informações pelas informações passadas na declaração da função
    if (livroEncontrado == true) {
        // Altera o titulo do livro pelo novo título através do índice do livro retornado na função buscarLivro
        listaLivros[livro].titulo = novoTitulo
        // Altera o autor do livro pelo novo autor através do índice do livro retornado na função buscarLivro
        listaLivros[livro].autor = novoAutor
        // Altera o ISBN do livro pelo novo ISBN através do índice do livro retornado na função buscarLivro
        listaLivros[livro].ISBN = novoISBN
        // Altera o ISBN do livro pelo novo ISBN através do índice do livro retornado na função buscarLivro
        listaLivros[livro].nota = novaNota
        // Imprime no console.log avisando que o livro foi alterado
        console.log("Livro Alterado - Função Alterar Livro")
        // Imprime a nova lista de livros
        console.log("Lista de livros atualizada:")
        console.log(listaLivros)
    }
    // Caso não existe retornados uma mensagem no console.log informando que o livro não foi encontrado
    else {
        console.log("O livro não foi encontrado - Função Alterar Livro")
    }
}                

// Chama a função excluir livro, passando como parâmetro o ISBN
// ISBN: Stuart Hall
alterarLivro("978-8583160076", "Pequeno Príncipe", "Antoine de Saint-Exupéry", "978-8595081512", 6.5)
console.log()

// EXIBIR 3 MELHORES NOTAS

function melhoresNotas() {
    // Cria uma lista nova igual a lista padrão, apenas para não atrapalhar os testes
    // Usar o slice, pois o javascript entrelaça a nova variável ao mesmo endereço de memória da variável igualada
    // Ou seja, as alterações feitas em uma variável afetam a outra.
    const listaMelhoresLivros = listaLivros.slice()
    //ORDENA CRESCENTE (melhor para pior)
    // Se livro2 - livro1 for maior que 0, livro2 possui indice menor que livro1, ou seja, vem primeiro
    listaMelhoresLivros.sort((livro1, livro2) => livro2.nota-livro1.nota)
    //CORTA A PARTIR DO 3 LIVRO
    //DIFERENÇA ENTRE SPLICE E SLICE
    listaMelhoresLivros.splice(3)
    console.log("3 MELHORES NOTAS: - FUNÇÃO MELHORES NOTAS")
    console.log(listaMelhoresLivros)
}

// Chama a função melhores notas
melhoresNotas()
console.log()

// EXIBIR 3 PIORES NOTAS

function pioresNotas () {
    // Cria uma lista nova igual a lista padrão, apenas para não atrapalhar os testes
    // Usar o slice, pois o javascript entrelaça a nova variável ao mesmo endereço de memória da variável igualada
    // Ou seja, as alterações feitas em uma variável afetam a outra.
    const listaPioresLivros = listaLivros.slice()
    //ORDENA DECRESCENTE (pior para melhor)
    // Se livro1 - livro2 for menor que 0, livro1 possui indice menor que livro2, ou seja, vem primeiro
    listaPioresLivros.sort((livro1, livro2) => livro1.nota-livro2.nota)
    //CORTA A PARTIR DO 3 LIVRO
    //DIFERENÇA ENTRE SPLICE E SLICE
    listaPioresLivros.splice(3)
    console.log("3 PIORES NOTAS: - FUNÇÃO PIORES NOTAS")
    console.log(listaPioresLivros)
}

// Chama a função piores notas
pioresNotas()
console.log()

// Função para salvar alterações no JSON
// efetuarMudancas()

// BACKUP

// [
//     {
//         "titulo": "Cibercultura",
//         "autor": "Pierre Levy",
//         "ISBN": "978-8573261264"
//     },
//     {
//         "titulo": "A riqueza das nações",
//         "autor": "Adam Smith",
//         "ISBN": "978-8536214092"
//     },
//     {
//         "titulo": "A identidade cultural na pós-modernidade",
//         "autor": "Stuart Hall",
//         "ISBN": "978-8583160076"
//     },
//     {
//         "titulo": "Metafísica",
//         "autor": "Aristóteles",
//         "ISBN": "978-8572838115"
//     },
//     {
//         "titulo": "Apologia de Sócrates",
//         "autor": "Platão",
//         "ISBN": "978-8552100669"
//     },
//     {
//         "titulo": "Assim falou Zaratustra",
//         "autor": "Friedrich Nietzsche",
//         "ISBN": "978-8572328562"
//     },
//     {
//         "titulo": "Os sofrimentos do Jovem Werther",
//         "autor": "Johann Wolfgang von Goethe",
//         "ISBN": "978-8582851401"
//     },
//     {
//         "titulo": "O que há de errado com o mundo?",
//         "autor": "Gilbert Keith Chesterton",
//         "ISBN": "978-8563160287"
//     },
//     {
//         "titulo": "Guia politicamente incorreto da filosofia",
//         "autor": "Luiz Felipe Pondé",
//         "ISBN": "978-8580444384"
//     },
//     {
//         "titulo": "O alienista",
//         "autor": "Machado de Assís",
//         "ISBN": "978-8563560933"
//     },
//     {
//         "titulo": "O Príncipe",
//         "autor": "Nicolau Maquiavel",
//         "ISBN": "978-8572839044"
//     }
// ]