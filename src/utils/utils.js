//Método para conseguir una imagen random desde nuestra api
const maximum = 826;
const minimum = 1;
const baseUrl = "https://rickandmortyapi.com/api/character";

const random = () =>{
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

export const createImageNodes = (character) => {
  
  const wrapper = document.createElement("div");
  wrapper.className = "p-4";
  
  const image = document.createElement("img");
  image.className = "mx-auto rounded-md bg-gray-300";
  image.dataset.src = character.image;
  image.width = 320;

  const nameCharacter = document.createElement("h2");
  nameCharacter.className = "mt-5 font-bold text-xl mb-2";
  nameCharacter.textContent = character.name;
    
  const status = document.createElement("p");
  status.className = "text-gray-600 text-base"
  status.textContent = `Status: ${character.status}   
                        Species: ${character.species}`;
  
  
  wrapper.append(image, nameCharacter, status);

  return [wrapper, image];
};