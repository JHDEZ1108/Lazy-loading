/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Método para conseguir una imagen random desde nuestra api
const maximum = 826;
const minimum = 1;

const random = () =>{
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

//Creamos y agregamos imagenes

const createImageNode = () =>{
  const container = document.createElement("div");
  container.className= "p-5";
  

  const image = document.createElement("img");
  image.className= "mx-auto";
  image.src = `https://rickandmortyapi.com/api/character/avatar/${random()}.jpeg`;
  
  container.appendChild(image);
  
  return container;
}

const newImage = createImageNode();
const mountNode = document.getElementById("images");

mountNode.appendChild(newImage);