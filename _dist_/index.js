import { registerImage, clearValue } from './utils/lazy.js';
import { createImageNodes } from './utils/utils.js';
import { getData } from "./utils/getData.js";

const maximum = 826;
const minimum = 1;
const random = () =>{
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

const baseUrl = "https://rickandmortyapi.com/api/character";
//Cargar las imagenes existentes cuando cargue la página
const allData = document.querySelectorAll("img[data-src]");
allData.forEach(registerImage);


//Agregar imagenes
const mountNode = document.getElementById("images");  
const addButton = document.querySelector("button");

addButton.addEventListener("click", async() =>{
  const idCharacter = random();  
  const character = await getData(`${baseUrl}/${idCharacter}`);

  const [node, image] = createImageNodes(character);

  registerImage(image);
  mountNode.append(node);
  
})

//Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  mountNode.innerHTML = "";
  clearValue();
});
