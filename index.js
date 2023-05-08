let id = 1;
let span = document.getElementById("contador");
const notas = []

function crearCajon() {

  let titulo = document.getElementById("titulo");
  let descripcion = document.getElementById("descripcion");

  //* Verificar los campos y motrar errores
  if( titulo.value == "" || descripcion.value == ""){
    const boxError = document.getElementById("box-error");
    return boxError.innerHTML = `<div class="error" id="error">
    <p>Todos los campos son obligatorios</p>
  </div>`
  }
  let error = document.getElementById("error");
  if(error){ error.remove() }

  //* Insertar en localstorage
  const nota = {
    id: id,
    titulo: titulo.value,
    descripcion: descripcion.value
  }
  notas.push(nota)
  console.log(notas)

  localStorage.setItem("notas", JSON.stringify(notas));

  titulo.value = ""
  descripcion.value = ""
  
  for(let nota in storage) {
    const desc = document.getElementById("desc");
    let html = `
    <div class="caja" id="tarjeta${storage[nota].id}">
      <h4 class="id">${storage[nota].id}</h4>
      <h3>${storage[nota].titulo}</h3>
      <hr />
      <p>${storage[nota].descripcion}</p>
      <div class="contenedor-icono">
        <a class="texto" id="eliminar">Borrar</a>
        <a class="texto" id="editar">Editar </a>
      </div>
    </div>`;
  
    desc.insertAdjacentHTML("afterend", html);
  }
  span.innerText = id
  id++
}

let storage = JSON.parse(localStorage.getItem("notas"));
console.log(storage);

if(!storage){ span.innerText = "Lista vacia" } 
else {
  for(let nota in storage) {
    const desc = document.getElementById("desc");
    let html = `
    <div class="caja" id="tarjeta${storage[nota].id}">
      <h4 class="id">${storage[nota].id}</h4>
      <h3>${storage[nota].titulo}</h3>
      <hr />
      <p>${storage[nota].descripcion}</p>
      <div class="contenedor-icono">
        <a class="texto" id="eliminar">Borrar</a>
        <a class="texto" id="editar">Editar </a>
      </div>
    </div>`;
  
    desc.insertAdjacentHTML("afterend", html);
  }
  span.innerText = id
}