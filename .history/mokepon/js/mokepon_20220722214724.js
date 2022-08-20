function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo  =


  if(inputHipodoge.checked){
    alert('Seleccionaste a Hipodoge')
  } else if(document.getElementById('capipepo').checked){
    alert('Seleccionaste a Capipepo')
  }
  else if(document.getElementById('ratigueya').checked){
    alert('Seleccionaste a Ratigueya')
  }
}

window.addEventListener("load", iniciarJuego);
