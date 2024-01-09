//conhecendo mais sobre JS

console.log('Situações que retornam verdadeiro: ');
console.log('"String vazia": ',!!"");
console.log('"String com um espaço apenas": ',!!" ");
console.log('String com vários espaços : ',!!"    ");
console.log('3: ',!!3);
console.log('-1: ',!!-1);
console.log('Atenção à precedência de operadores');//é como na matemática
console.log('!!5+5: ',!!5+5);//retorna 6
console.log('5+5: ',!!(5+5));//retorna true
console.log('5-5: ',!!5-5);// -4
//acima retorna -4, pois primeiro converte !5, depois nega a negação, depois subtrai

console.log('5-5 retorna : ',!!(5-5));//retorna false, 5-0=0
console.log(' : ',!!' ');
console.log('{}: ',!!{});
console.log('[] : ',!![]);
console.log('infinity: ',!!Infinity);//true. positive Infinity é um número muito grande:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
console.log('- infinity: ',!!-Infinity);//true. Infinity é um número muito pequeno, mas não zero:
console.log('infinity - infinity: ',!!(Infinity-Infinity));//NaN, false. Infinity é um número muito pequeno, mas não zero:

console.log('Situações que retornam falso: ');
console.log('5-5: ',!!(5-5));//retorna false
console.log('5-5: ',(!!5)-5);//retorna -4. Primeiro gera 1, depois subtrai 5
console.log('vazia: ',!!"");
console.log('vazia: ',!!'');
console.log('Nan: ',!!NaN);
console.log('undefined: ',!!undefined);
console.log('null: ',!!null);
/* interessante perceber abaixo que um objeto e uma array
 (que é um tipo especial de objeto), quando declarados, 
 mesmo sem ser inicializados, retornam true. 
 Provavelmente, isso ocorre por possuirem um 'link',
 um referência de memória, e esta é verificada pelo Boolean.
 Obs.: essa é uma discussão longa. Veja mais em:
  https://stackoverflow.com/questions/19146176/
  why-do-empty-javascript-arrays-evaluate-to-true-in-conditional-structures
  */
  console.log('Objetos e Arrays retornam true');
  console.log('{} : ',!!{});  
  console.log('[] : ',!![]);
  //apesar dos tamanhos serem zero (objetos e arrays, respectivamente abaixo)
  //obs.: para retornar o tamanho de um obj, 
  //uma maneira é buscar quantas chaves (índices) ele possui.
  /*Para isso, deve-se chamar a função keys(), da classe Object.
  ela recebe um array como parâmetro, e retorna um array, 
  com os índices (chaves) dele. Ex.: 0, 1, 2 , 3
  Neste caso, como o objeto era vazio, o array tem tamanho zero.
  Fonte: adaptado de https://www.w3schools.com/jsref/jsref_object_keys.asp
   */
  console.log('{}keys : ',Object.keys({}).length);
  console.log('[] length: ',[].length);

  //Exercícios
  console.log('Exercícios');
  console.log('!7',!7);//false
  console.log('!!7',!!7);//true
  console.log('!!7-7',!!7-7);//-6
  console.log('!!(7-7)',!!(7-7));//false
  console.log('!(7-7)',!(7-7));//true
  
  //Em operações lógicas, ao se deparar com uma comparação de valor true, além de entrar,
  //a JS retorna o valor daquela comparação. Se era apenas um teste lógica, retorna true ou false. Ex.: 8>7 retorna true
  //Se era uma variável, returna o boolenado daquela variável. Ex.: false, se 0, true se 9:
  console.log('Expressão Lógica 8>7: ',(''||undefined||null||(8>7)));// retorna true
  console.log('Expressão Lógica (9): ',(''||undefined||null||9));// retorna 9
  console.log('E agora, sem !!',(''||undefined||null||'Oi'));//true também. Sem o not not, retorna o valor
  console.log('E agora, com !! e string preenchida: ',!!(''||undefined||null||'Oi'));//a última é true. Entra nela. O !! converte para boolean
  
  console.log('E agora, com objeto e sem !!?',(''||undefined||null||{}));//entra na parte verdadeira, e sem o not not
  console.log('E agora, com objetos e !!: ',!!(''||undefined||null||{}));//true, pois objeto vazio é true
  
  /*Faça uma validação da seguinte maneira: se o usuário(a) informou 
  o nome, retorne o nome, senão, retorne 'não informado'.
  */
  let nome = ''
  nome = 'João das Neves'
  console.log(nome||'Não informado');

  