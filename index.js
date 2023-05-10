function getData(i) {
  return [`
  <div class="caja" id="tarjeta${i.id}">
    <h4 class="id">${i.id}</h4>
    <h3>${i.titulo}</h3>
    <hr />
    <p>${i.descripcion}</p>
    <div class="contenedor-icono">
      <a class="texto" id="eliminar">Borrar</a>
      <a class="texto" id="editar">Editar </a>
    </div>
  </div>`]
}

const crearNota = async() =>{
  //* Tomar valores del formulario
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  
  //* Obtener los datos del localstorage
  const datos = await JSON.parse(localStorage.getItem("notas"));
  
  //* Crear un id
  let id = 1;

  //? Ver si hay datos existentes
  if(!datos){
    //* Crear un objeto [ nota ]
    const nota = {
    id,
    titulo: titulo.value,
    descripcion: descripcion.value
    }

    //TODO: Crear un array vacio e insertar la nota creada
    const notas = [];
    notas.push(nota);
    
    //* Insertar el array en localstorage un objeto en localstorage
    localStorage.setItem("notas", JSON.stringify(notas));
    
    //* Mostrar nueva nota
    const desc = document.getElementById("desc"); //? Elemento donde se insertarán las notas
    
    //* Obtener datos
    const datos = await JSON.parse(localStorage.getItem("notas"));
    const size = Object.keys(datos).length - 1 //? Tamaño del objeto
    
    //* Mostrar cantidad de insertados
    document.getElementById("contador").innerText = id

    //* Insertar elemento en el listado:
    return desc.insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
  } else {
    //* Obtener los datos del localstorage
    let datos = await JSON.parse(localStorage.getItem("notas"));
    
    //* Crear un id a partir del tamaño del Objeto
    let id = Object.keys(datos).length + 1
    
    //* Crear un objeto [ nota ]
    const nota = {
      id,
      titulo: titulo.value,
      descripcion: descripcion.value
    }
    
    //* Modificación del id en notas
    nota.id = id++
    

    //* Creando una copia de los datos
    const notas = [...datos];
    console.log(notas);
  
    // //TODO: Crear un array vacio e insertar la nota creada
    notas.push(nota);
  
    // //* Modificar el objeto agregando la nueva nota
    localStorage.setItem("notas", JSON.stringify(notas));
  
    //* Refrescar los datos
    datos = await JSON.parse(localStorage.getItem("notas"));
    const size = Object.keys(datos).length - 1 //? Tamaño del objeto

    //* Mostrar cantidad de insertados
    document.getElementById("contador").innerText = Object.keys(datos).length

    //* Insertar elemento en el listado:
    return document.getElementById(`tarjeta${size}`).insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
  }
}
//* Variable Contador */
let contador = document.getElementById("contador")

//* Comprobar si existen notas creadas
if(window.localStorage.getItem("notas") !== null){
  //* Tomar las notas anteriores
  let datos = JSON.parse(localStorage.getItem("notas"));

  //* Copiar los datos
  const notas = [...datos];
  
  //* Iterar por cada elemeto y crear cada nota
  const contenido = notas.map(getData).join("");
  
  //* Insertar elementos existentes después del título
  document.getElementById("desc").insertAdjacentHTML("afterend", contenido);

  //* Cambiar el contador
  document.getElementById("contador").innerText = Object.keys(datos).length
}
