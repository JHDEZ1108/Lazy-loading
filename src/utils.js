//Método para conseguir una imagen random desde nuestra api
const maximum = 826;
const minimum = 1;
const baseUrl = "https://rickandmortyapi.com/api/character";

const random = () =>{
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export const createImageNodes = () => {

  const wrapper = document.createElement("div");
  wrapper.className = "p-4";
  const idCharacter = random();

  const image = document.createElement("img");
  image.className = "mx-auto rounded-md bg-gray-300";
  image.dataset.src = `${baseUrl}/avatar/${idCharacter}.jpeg`;
  image.width = 320;

  
  wrapper.append(image);

  return [wrapper, image];
};