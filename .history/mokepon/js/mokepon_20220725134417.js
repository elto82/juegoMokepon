let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
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
  let spanVidaJugador = document.getElementById("vida-jugador");
  let spanVidaEnemigo = document.getElementById("vida-enemigo");

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
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo ataco con ${ataqueEnemigo},${resultado}`;

  sectionMensajes.appendChild(parrafo);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");

  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("No has seleccionado una mascota");
  }

  seleccionarMascotaEnemigo();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

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

function reiniciarJuego() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
