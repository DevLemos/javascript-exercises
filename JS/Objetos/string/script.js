const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// Propriedade com o total de caracteres da string str.length
const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a

// Retorna o caracter de acordo com o index de (n). str.charAt(n)
const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

// Concatena as strings e retorna o resultado. str.concat(str2, str3, ...)
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';

const fraseCompleta = frase2.concat(linguagem2, '!!');
console.log(fraseCompleta);

//Procura pela string exata dentro de outra string. A procura é case sensitive. str.includes(search, position)
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// Procura pela string exata dentro de outra string. A procura é case sensitive. str.endsWith(search) e str.startsWith(search)
const fruta2 = 'Banana';

fruta2.endsWith('nana'); // true
fruta2.startsWith('Ba'); // true
fruta2.startsWith('na'); // false

// Corta a string de acordo com os valores de start e end. str.slice(start, end)
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice. str.substring(start, end) 
const linguagem3 = 'JavaScript';
linguagem3.substring(3,5); // aS
linguagem3.substring(0,4); // Java
linguagem3.substring(4); // Script
linguagem3.substring(-3); // JavaScript

// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
// str.indexOf(search) e str.lastIndexOf(search)
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. 
//O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
//str.padStart(n, str) e str.padEnd(n, str)
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

//Repete a string (n) vezes. str.repeat(n)
const frase4 = 'Ta';

frase.repeat(5); // TaTaTaTaTa

//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. 
//Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
//str.replace(regexp|substr, newstr|function)
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
console.log(listaItens);
console.log(preco);

//Divide a string de acordo com o padrão passado e retorna uma array. str.split(padrao)
const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');
console.log(listaItens2);
console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');

//join é um método de Array
const htmlNovo = htmlArray.join('section');
console.log(htmlArray);
console.log(htmlNovo);

//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
//str.toLowerCase() e str.toUpperCase()
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

//Remove espaço em branco do início ou final de uma string.
//str.trim(), str.trimStart(), str.trimEnd()
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'




























