function iniciarJuego(){
  
}

function seleccionarMascotaJugador(){
  alert('seleccionaste tu mascota')
}

let botonMascotaJugador = document.getElementById('boton-mascota');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

window.addEventListener('load', iniciarJuego)
