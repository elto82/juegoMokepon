function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  if(document.getElementById('hipodoge').checked){
    alert('Seleccionaste a Hipodoge')
  } else if(document.getElementById('capipepo').checked){
    alert('Seleccionaste a Capipepo')
  }
  else if(document.getElementById('capipepo').checked){
    alert('Seleccionaste a Capipepo')
  }
}

window.addEventListener("load", iniciarJuego);
