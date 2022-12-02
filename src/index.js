/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Creamos una imagen
//Agregamos una imagen

const createImageNode = () =>{
  const container = document.createElement("div");
  container.className= "p-5";
  

  const image = document.createElement("img");
  image.className= "mx-auto";
  image.src = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
  
  container.appendChild(image);
  
  return container;
}

const newImage = createImageNode();
const mountNode = document.getElementById("images");

mountNode.appendChild(newImage);