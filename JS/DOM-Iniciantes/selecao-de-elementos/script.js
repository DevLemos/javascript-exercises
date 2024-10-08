// Retorne no console todas as imagens do site
const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao");
const h2Animais = animais.querySelector("h2");

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[--paragrafos.length]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
