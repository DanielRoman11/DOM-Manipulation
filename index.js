let contador = 0;
function crearCajon() {
  const desc = document.getElementById("desc");
  const span = document.getElementById("contador");
  span.innerText = contador
  let html = `<div class="caja" id="tarjeta${contador++}">
  <h3>Caja# ${contador + 1}</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugiat.</p>
</div>`;
  desc.insertAdjacentHTML("afterend", html);
}


