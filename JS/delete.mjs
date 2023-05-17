import { getData } from './index.mjs';

async function removerNota(i) {
  let datos = await JSON.parse(localStorage.getItem("notas"));
  //* Copiar los datos
  const notas = [...datos];
  console.log("Notas antes: "+ notas);
  notas.splice(i, 1);
  console.log("Notas después: "+ notas); 
}

export default removerNota;