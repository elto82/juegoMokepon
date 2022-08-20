const ocultarReinicio = document.getElementById("reiniciar");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
/* let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque"); */

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidaJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionMensajes = document.getElementById("resultado");
/* let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let ocultarReinicio = document.getElementById("reiniciar"); */

/* let sectionMensajes = document.getElementById("resultado"); */
const ataquesJugador = document.getElementById("ataquesJugador");
const ataquesEnemigo = document.getElementById("ataquesEnemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

let mokepones = [];
let ataqueJugador;
let opcionDeMokepones;
let mascotaJugador;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.webp",
  5
);
let capipepo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.webp",
  5
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.webp",
  5
);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "⏳", id: "boton-tierra" }
);

capipepo.ataques.push(
  { nombre: "⏳", id: "boton-tierra" },
  { nombre: "⏳", id: "boton-tierra" },
  { nombre: "⏳", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "⏳", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  ocultarReinicio.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre}>
      <label class="tarjeta-mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
      </label>
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

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
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id
  } else {
    alert("No has seleccionado una mascota");
    reiniciarJuego();
  }
  extraerAtaques(mascotaJugador)
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador){
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }    
  }

  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques)

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
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
