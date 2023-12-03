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
        let target = e.target.parentNode.parentNode
        //! Remover el elemento padre
        // console.log(target);
        target.remove();
        
        let idEliminar = e.target.parentNode.parentNode.firstElementChild.firstElementChild.innerText;
        
        if(Object.keys(notas).length !== 1){
          const indexEliminar = notas.findIndex(nota => nota.id === Number(idEliminar));

          if(indexedDB !== -1) notas.splice(indexEliminar, 1);

          //? Disminuir el contador
          let cantidadnotas = document.getElementById("notesList").children.length;
          
          document.getElementById("contador").innerHTML = cantidadnotas;

          return localStorage.setItem("notas", JSON.stringify(notas))
        }
        document.getElementById("contador").innerHTML = "";
        return localStorage.removeItem("notas")
      }
    });
  });
}

export default removerNota;