const [a] = [705]
console.log('[a] = [705]',a);

const [,,fruta3,fruta4,fruta5] = 
[
    'Kiwi','Nectarina Importada','Melão','Mamão','Banana','Melancia','Castanha de Caju'
]
console.log('fruta3: ', fruta3); console.log('fruta4: ', fruta4);
console.log('fruta5: ', fruta5);
//é possível fazer com arrays aninhados:
//Exemplo: retorne o elemento b33 (9):
const [,,[,,b33]] = [[8,7,6],[4,7,8],[3,5,9]] 
console.log('b33: ', b33);
//ou simplesmente usar os índices:
const b = [[8,7,6],[4,7,8],[3,5,9]] 
//acessar um por um
console.log('b[2][2]',b[2][2]);
console.log('b[0][2]',b[0][2]);
