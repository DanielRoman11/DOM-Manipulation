import { getData } from './index.mjs';

async function removerNota(item) {
  localStorage.removeItem(item);

  let datos = await JSON.parse(localStorage.getItem("notas"));
  //* Copiar los datos
  const notas = [...datos];

  //* Iterar por cada elemeto y crear cada nota
  const contenido = notas.map(getData).join("");

  //* Insertar elementos existentes después del título
  document.getElementById("desc").insertAdjacentHTML("afterend", contenido);

  //* Cambiar el contador
  document.getElementById("contador").innerText = Object.keys(datos).length;
}

export default removerNota;