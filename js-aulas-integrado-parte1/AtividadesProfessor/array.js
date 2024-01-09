/* ARRAY VAZIO */
pessoas = [];
console.log(pessoas);

/* Adicionando Informações */

//Array[id] + objeto

pessoas[0] = {id: 1, nome: "Joana", endereco: "Jardim Maluche"};
pessoas[1] = {id: 2, nome: "Pedro", endereco: "Rio Branco"};
pessoas[2] = {id: 3, nome: "Maria", endereco: "Guarani"};
pessoas[3] = {id: 4, nome: "José", endereco: "Águas Claras"};
pessoas[4] = {id: 5, nome: "Kaique", endereco: "Lageado"};

//Array[1] 1 elemento

console.log(pessoas[0]);

//Array Completo

console.log(pessoas);

//Apagando ultimo objeto (pessoas[5])

pessoas.pop();
console.log(pessoas);

//Adicionar outro objeto no Array

pessoas.push({id: 6, nome: "Fabricia", endereco: "Cedro Alto"});
console.log(pessoas);