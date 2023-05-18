import { getData } from './index.mjs';

async function removerNota() {
  //* Iterar cada elemento de la tarjeta
  let datos = await JSON.parse(localStorage.getItem("notas"));
  
  //* Copiar los datos
  let notas = [...datos];
  document.querySelectorAll(".caja").forEach(async el => {
    //* Evento de click en cada elemento
    el.addEventListener("click", e => {
      let opcion = e.target.innerText
      if(opcion == "Delete"){ //? Evento en el botón
        let targetId = e.target.parentNode.parentNode.id //? Obtener ID de la tarjeta en espécífico
        document.getElementById(targetId).remove()
        
        let id = e.target.parentNode.parentNode.firstElementChild.firstElementChild.innerText
        notas.map(i => i.id == id ? notas.splice(i.id - 1, 1) : console.log("Not deleted"))
        console.log(notas);

        localStorage.setItem("notas", JSON.stringify(notas))
      }
    });
  });
  //? Cambiando el contador
  document.getElementById("contador").innerText = Object.keys(datos).length;
}

export default removerNota;