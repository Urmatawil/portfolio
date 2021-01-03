//codigo para generar url amigable
let text = document.querySelector(".titulo").textContent;
const titulo = text
  .trim()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/ /g, "-")
  .toLowerCase();

document.title = `Portafolio | ${titulo}`;
