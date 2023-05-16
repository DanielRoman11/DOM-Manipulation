const crearNota = async() =>{
  //* Tomar valores del formulario
  const titulo = document.getElementById("titulo");
  const descripcion = document.getElementById("descripcion");

  
  //* Obtener los datos del localstorage
  const datos = await JSON.parse(localStorage.getItem("notas"));
  
  //* Crear un id
  let id = 1;

  //TODO: Comprobar errores


  //? Ver si hay datos existentes
  if(!datos){
    //* Crear un objeto [ nota ]
    const nota = {
    id,
    titulo: titulo.value,
    descripcion: descripcion.value
    }

    //* Crear un array vacio e insertar la nota creada
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
    desc.insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
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
  
    //* Crear un array vacio e insertar la nota creada
    notas.push(nota);
  
    //* Modificar el objeto agregando la nueva nota
    localStorage.setItem("notas", JSON.stringify(notas));
  
    //* Refrescar los datos
    datos = await JSON.parse(localStorage.getItem("notas"));
    const size = Object.keys(datos).length - 1 //? Tamaño del objeto

    //* Mostrar cantidad de insertados
    document.getElementById("contador").innerText = Object.keys(datos).length

    //* Insertar elemento en el listado:
    document.getElementById(`tarjeta${size}`).insertAdjacentHTML("afterend", getData(datos[size]).join(" "));
  }
  //* Reiniciar campos
  titulo.value = ""
  return descripcion.value= ""
}

export default crearNota;