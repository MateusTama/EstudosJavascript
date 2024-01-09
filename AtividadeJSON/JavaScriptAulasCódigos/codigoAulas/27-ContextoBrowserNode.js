/*
Abrir o navegador, e teclar f12
No console, digitar e perceber que o objeto window (w minúsculo)
que pode ser acessado pela palavra this,
define o escopo global da aplicação.
Significa que ao criar variáveis com var,
ou functions com a pavra function, elas viram globais.
Em outras palavras, podem ser acessadas pelo objeto window:
window.a
window.testeFunction()
Agora, se criar algo com let ou const (variáveis ou arrow function por exemplo),
elas não serão acessadas globalmente.
Exercício:
No console do browser:
1-digite window
2- digite this
3-verifique se window e this são iguais
4-crie uma var a = 8
5 - acesse window.a
6-crie uma let b = 7
7-tente acessar window.c
8-crie uma function teste (return this==window)
9-acesse window.teste()
10-crie uma arrow function em uma const:
//const maioridade = idade => (idade>=18)? 'Maior':'Menor'
11- agora tente acessar window.maioridade()
*/
/*Agora, voltando ao Node.js, 
cada arquivo é um nó:
*/

this.teste = '12345'
console.log('this.teste', this.teste);//this retorna as propriedades deste nó (node)

let b = 'com let o this não pega'
console.log('this.b: ',this.b);//undefined

a = 12345
console.log('Sem usar var, vai parar na global: global.a',global.a)//global no node é similar ao window do browser
console.log(global.teste)////undefined


