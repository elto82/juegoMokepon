let ocultarReinicio = document.getElementById("reiniciar");
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
let botonMascotaJugador = document.getElementById("boton-mascota");
let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let botonReiniciar = document.getElementById("boton-reiniciar");

let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
/* let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque"); */
let inputHipodoge = document.getElementById("hipodoge");
let inputCapipepo = document.getElementById("capipepo");
let inputRatigueya = document.getElementById("ratigueya");
let spanMascotaJugador = document.getElementById("mascota-jugador");

let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

let spanVidaJugador = document.getElementById("vida-jugador");
let spanVidaEnemigo = document.getElementById("vida-enemigo");

let sectionMensajes = document.getElementById("resultado");
/* let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let ocultarReinicio = document.getElementById("reiniciar"); */

/* let sectionMensajes = document.getElementById("resultado"); */
let ataquesJugador = document.getElementById("ataquesJugador");
let ataquesEnemigo = document.getElementById("ataquesEnemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  ocultarReinicio.style.display = "none";

  sectionSeleccionarAtaque.style.display = "none";

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonFuego.addEventListener("click", ataqueFuego);

  botonAgua.addEventListener("click", ataqueAgua);

  botonTierra.addEventListener("click", ataqueTierra);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  
  sectionSeleccionarMascota.style.display = "none";

  
  sectionSeleccionarAtaque.style.display = "flex";

  

  

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("No has seleccionado una mascota");
    reiniciarJuego();
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  

  if (mascotaAleatorio == 1) {
    //Hipodoge
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    //Capipepo
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    //Ratigueya
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE.");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE.");
    vidasEnemigo--;
    spanVidaEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE.");
    vidasEnemigo--;
    spanVidaEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE.");
    vidasEnemigo--;
    spanVidaEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE.");
    vidasJugador--;
    spanVidaJugador.innerHTML = vidasJugador;
  }
  //revisar vidas
  revisarvidas();
}

function revisarvidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! ganaste 🎉🎉🎉");
    alert("FELICITACIONES! ganaste 🎉🎉🎉");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("LO SIENTO! perdiste 😥🥲😭");
    alert("LO SIENTO! perdiste 😥🥲😭");
  }
}

function crearMensajeFinal(resultadoFinal) {
  

  sectionMensajes.innerHTML = resultadoFinal;

  
  botonFuego.disabled = true;
  
  botonAgua.disabled = true;
  
  botonTierra.disabled = true;

  
  ocultarReinicio.style.display = "block";
}

function crearMensaje(resultado) {
  

  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function reiniciarJuego() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
