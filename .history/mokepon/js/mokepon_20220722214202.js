function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  if(document.getElementById('hipodoge').checked){
    alert('Seleccionaste a Hipodoge')
  }
}

window.addEventListener("load", iniciarJuego);
