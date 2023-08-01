function removerNota() {
  //* Iterar cada elemento de la tarjeta
  let datos = JSON.parse(localStorage.getItem("notas"));
  
  //* Copiar los datos
  let notas = [...datos];
  document.querySelectorAll(".caja").forEach(el => {
    //* Evento de click en cada elemento
    el.addEventListener("click", e => {
      let opcion = e.target.innerText
      if(opcion == "Delete"){ //? Evento en el botón
        //? Obtener ID de la tarjeta en espécífico
        let targetId = e.target.parentNode.parentNode.id 
        //! Remover el elemento padre
        document.getElementById(targetId).remove()
        
        //? Disminuir el contador
        let contador = document.getElementById("contador")
        contador.innerHTML = contador.innerText - 1
        if(contador.innerText == 0){
          contador.innerHTML = ""
        }
        
        let id = e.target.parentNode.parentNode.firstElementChild.firstElementChild.innerText
        
        if(Object.keys(notas).length !== 1){
          notas = notas.filter(i => i.id != id)

          let contador = document.getElementById("contador")
          contador.innerHTML = contador.innerText --

          return localStorage.setItem("notas", JSON.stringify(notas))
        }
        return localStorage.removeItem("notas")
      }
    });
  });
}

export default removerNota;