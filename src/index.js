import { registerImage, clearValue } from './lazy';
import { createImageNodes } from './utils';

//Cargar las imagenes existentes cuando cargue la página
const allData = document.querySelectorAll("img[data-src]");
allData.forEach(registerImage);


//Agregar imagenes
const mountNode = document.getElementById("images");  
const addButton = document.querySelector("button");

addButton.addEventListener("click", () =>{
  const [node, image, name] = createImageNodes();
  registerImage(image);
  mountNode.append(node, name);
})

//Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  mountNode.innerHTML = "";
  clearValue();
});