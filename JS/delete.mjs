import { getData } from './index.mjs';

async function removerNota() {
  let datos = await JSON.parse(localStorage.getItem("notas"));
  //* Copiar los datos
  const notas = [...datos];
  console.log(notas);
  document.querySelectorAll(".caja").forEach(el => {
    el.addEventListener("click", e => {
      let type = e.target.nodeName
      console.log(type);
      if(type == "A"){
        let targetId = e.target.parentNode.parentNode.id
        document.getElementById(targetId).remove()
      }
    });
  });
  
}

export default removerNota;