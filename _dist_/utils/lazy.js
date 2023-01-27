export let totalImages = 0;
export let loadedImages = 0;

const observer = new IntersectionObserver((entries) =>{
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})

const isIntersecting = (entry)=>{
  return entry.isIntersecting;
}

const loadImage = (entry)=>{
  //Cargar la imagen
  const container = entry.target;
  container.src = container.dataset.src;
  
  //Llevar registro de las imagenes cargadas
  container.onload = () =>{
    loadedImages +=1;
    logState();
  }
  
  //Desregistrar la imagen
  observer.unobserve(container);
}

export const registerImage = (image) =>{
  //IntersectionObserver
  observer.observe(image);
  totalImages += 1;
  logState();
}

export const clearValue = ()=>{
  console.clear();
  totalImages = 0;
  loadedImages = 0;
}

function logState(){
  console.log(`🫣 Total Imágenes: ${totalImages}`);
  console.log(`😶‍🌫️ Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}