//Em JS, tudo é função.
console.log(typeof Object);//function
//Porém, objetos instanciados (ou funções instanciadas) são objetos.
console.log(typeof new Object);//object
console.log(typeof new Object());//object

//Até classes são funções
class Cliente{}
console.log('Cliente: ', typeof Cliente);
//Porém, ao instanciá-las, temos objetos
console.log('new Cliente: ', typeof new Cliente);
console.log('new Cliente(): ', typeof new Cliente());

//É possível também armazenar classes e objects em variáveis
const servico = class Servico{}
console.log('const servico: ', typeof servico);
console.log('new Servico: ', typeof new servico);
console.log('new Servico(): ', typeof new servico());


