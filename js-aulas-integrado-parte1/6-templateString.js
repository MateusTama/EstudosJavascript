/*A ECMAScript permite que com crase, o código possa trabalhar com 
/caracteres especiais se usar a barra invertida (\n, \').
*/
let texto = "olá bonitao\""
console.log(texto)

let text =
`A minha aula 
preferida 
da semana
é "exatamente" esta, rs`
console.log(text)

let firstName = "Joao";
let lastName = "Das Neves";

//Facilita também a interpolação de variáveis
text = `Olá ${firstName}, ${lastName}!`;
console.log(text)

