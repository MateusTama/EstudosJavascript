/*
Quando não se sabe o limite das iterações,
pode-se utilizar o while.
*/
// Math.randoom() retorna valores entre 0 (incluindo 0) 
// e 1 (excluindo 1)
//Math.floor arredonda para o inteiro mais baixo
let limite = Math.floor(Math.random()*10)
let contador=0
while (contador<=limite)
{
    console.log('limite: ',limite,' contador: ', contador);
    contador++
}
//ou:
contador = 0
limite = 0
do 
{
    console.log('DO WHILE limite: ',limite,' contador: ', contador);
    contador++
}
while(contador<=limite)
console.log(contador);




