export const getData = async (baseUrl) => {
  try{
      const response = await fetch(baseUrl);
      return await response.json();
  }catch(error){
      console.log(error);
  }
}