import { getData } from './index.mjs';

async function removerNota() {
  let datos = await JSON.parse(localStorage.getItem("notas"));
  //* Copiar los datos
  const notas = [...datos];
  console.log(notas);
  //* Iterar cada elemento de la tarjeta
  document.querySelectorAll(".caja").forEach(el => {
    //* Evento de click en cada elemento
    el.addEventListener("click", e => {
      let type = e.target.nodeName 
      if(type == "A"){ //? Evento en el botón
        let targetId = e.target.parentNode.parentNode.id //? Obtener ID de la tarjeta en espécífico
        document.getElementById(targetId).remove()
      }
    });
  });
  let contador = document.getElementById("contador")
}

export default removerNota;