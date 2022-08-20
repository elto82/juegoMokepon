function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')

  let spanMascotaJugador = document.getElementById('mascota-jugador');

  if(inputHipodoge.checked){
    spanMascotaJugador.innerHTML = 'Hipodoge';
  } else if(inputCapipepo.checked){
    spanMascotaJugador.innerHTML = 'Capipepo';
  }
  else if(inputRatigueya.checked){
    spanMascotaJugador.innerHTML = 'Ratigueya';
  } else{
    alert('No has seleccionado una mascota')
  }

  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

window.addEventListener("load", iniciarJuego);
