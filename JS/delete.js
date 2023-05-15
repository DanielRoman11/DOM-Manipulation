const remover = async(item) => {
  let contador = document.getElementById("contador");
  contador = contador - 1;
  return localStorage.removeItem(item);
}