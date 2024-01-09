// 2.	Escreva uma função que receba dois parâmetros, e retorne o primeiro multiplicado pelo segundo. Utilize parâmetros default, para caso a função não receba nenhum valor, os parâmetros tenham o valor padrão de zero

function exibirMultiplicacao(x=0,y=0) {
    resultado = x*y
    console.log(resultado)
}

exibirMultiplicacao(4,4)