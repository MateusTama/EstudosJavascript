for (var i=0;i<3;i++)
{
    console.log(i)
}
console.log(`Com var, mesmo depois de sair do for,
 o valor de i está no limite:`,i)

for (let j=0;j<3;j++)
{
    console.log(j)
}
//Com let, gera erro, pois J pertence apenas ao escopo do for.
//console.log(j)//ReferenceError: j is not defined
console.log(`Agora, veja outra situação perigosa de se trabalhar
 com var`)
const b = []
for (let l=0;l<2;l++)
{
    b.push(function () 
    {
        console.log('let l: ',l);
    })
}
b[0]()//imprime 0
b[1]()//imprime 1

const a = []
for (var k=0;k<2;k++)
{
    a.push(function () 
    {
        console.log('var k: ',k);
    })
}
a[0]()//com var, imprime 2
a[1]()//com var, imprime 2
