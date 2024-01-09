function semTratamento(estudante)
{
    estudante.nome = 'joana'
    console.log(estudante.nome.toUpperCase())
    //console.log(estudante.nomeCompleto.toUpperCase())
}

estudante = 
{
    nomeCompleto: 'Monalisa Da Vinci',
    tipo : 'Fictício'

}
//console.log(semTratamento(estudante));

/*
Em geral, deve-se evitar exibir detalhes de infraestrutura para o usuário,
que aparecem na desctição do erro ocorrido.
Também é legal colocar uma mensagem amigável, no idioma do(a) usuário(a),
e ainda, informando talvez um e-mail de contato, ou uma mensagem para
entrar em contato com o adm do sistema.
*/

function comTratamento(estudante)
{
    try
    {
        console.log(estudante.nome.toUpperCase())
    }
    catch (erro)
    {   
        informarErroAoUsuarioa(erro)        
    }
    finally
    {
        console.log('Saída da função: ','comTratamento(estudante)')
    }
}
    function informarErroAoUsuarioa(erro)
    {
        throw {
            avisoUsuario: 'Um erro ocorreu. Entre em contato com o adm do sistema, com o print da tela de erro',
            nome: erro.name,
            msgOriginal: erro.message,
            data: new Date()
            }
    }
    //Agora, veja a diferença entre as duas versões abaixo    
    //console.log(semTratamento(estudante));
    //É importante também saber onde colocar o bloco try-catch
    //A seguir, o exemplo demonstra que se um erro ocorrer antes de uma função que tem tratamento
    //ainda assim não seria tratado (por isso foi colocado um try-catch antes de chamar a função,
    //pois o erro está em enviar um objeto que não existe.)
    /*
    try {
        console.log(comTratamento(estudanteSuperior));
        
    } catch (error) {
        informarErroAoUsuarioa(error)    
    }
    */
   console.log(comTratamento(estudante))
   