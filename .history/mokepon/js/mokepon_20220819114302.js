const ocultarReinicio = document.getElementById("reiniciar");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const botonMascotaJugador = document.getElementById("boton-mascota");

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
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = [];
let ataqueJugador;
let opcionDeMokepones;
let mascotaJugador;
let ataquesMoquepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botonReiniciar;
let botones = [];
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugadorC = []
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let ataqueEnemigo = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext('2d');
let intervalo

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = 20
    this.y = 30
    this.ancho = 80
    this.alto = 80  
    this.mapaFoto = new Image()
    this.mapaFoto.src = foto
    this.velicidadx = 0
    this.velicidady = 0
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
  sectionVerMapa.style.display = 'none'

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";
  //sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = 'flex'
  intervalo = setInterval(pintarPersonaje, 50)

  window.addEventListener('keydown', sePresionaTecla)
  window.addEventListener('keyup', detenerMovimiento)


  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert("No has seleccionado una mascota");
    reiniciarJuego();
  }
  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMoquepon = `
    <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
    `;
    contenedorAtaques.innerHTML += ataquesMoquepon;
  });
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botonReiniciar = document.getElementById("boton-reiniciar");
  botones = document.querySelectorAll('.BAtaque')


  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function secuenciaAtaque(){
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugadorC.push('FUEGO')
        console.log(ataqueJugadorC);
        boton.style.background = '#f3dced'
        boton.disabled = true;
      } else if (e.target.textContent === '💧') {
        ataqueJugadorC.push('AGUA')
        console.log(ataqueJugadorC);
        boton.style.background = '#f3dced'
        boton.disabled = true;
      } else {
        ataqueJugadorC.push('TIERRA')
        console.log(ataqueJugadorC);
        boton.style.background = '#f3dced'
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo()  
    })
  })
  
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
  secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}

function iniciarPelea() {
  if(ataqueJugadorC.length === 5){
    combate()
  }
}

function indexAmbosOponentes(jugador, enemigo){
  indexAtaqueJugador = ataqueJugadorC[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
  for (let i = 0; i < ataqueJugadorC.length; i++) {
    if (ataqueJugadorC[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATE.");
    } else if (ataqueJugadorC[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE.");
      victoriasJugador++;
      spanVidaJugador.innerHTML = victoriasJugador
    } else if (ataqueJugadorC[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE.");
      victoriasJugador++;
      spanVidaJugador.innerHTML = victoriasJugador
    } else if (ataqueJugadorC[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE.");
      victoriasJugador++;
      spanVidaJugador.innerHTML = victoriasJugador
    } else {
      crearMensaje("PERDISTE.");
      victoriasEnemigo++;
      spanVidaEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  //revisar vidas
  revisarvidas();
}

function revisarvidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("esto fue un empate!!!");    
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("Felicitaciones! Ganaste 🎉🎉🎉");
    alert("Felicitaciones! Ganaste 🎉🎉🎉");
  } else{
    crearMensajeFinal('Lo siento, perdiste 😥🥲😭')
    alert('Lo siento, perdiste 😥🥲😭')
  }
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  ocultarReinicio.style.display = "block";
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
  location.reload();
}

function pintarPersonaje() {
  capipepo.x = capipepo.x + capipepo.velicidadx
  capipepo.y = capipepo.y + capipepo.velicidady
  lienzo.clearRect(0,0,mapa.width,mapa.height)
  lienzo.drawImage(
    capipepo.mapaFoto,
    capipepo.x,
    capipepo.y,
    capipepo.ancho,
    capipepo.alto,
 )
}

function moverDerecha() {
  capipepo.velicidadx = + 5
}

function moverIzquierda() {
  capipepo.velicidadx = - 5
}

function moverArriba() {
  capipepo.velicidady = -5
}

function moverAbajo() {
  capipepo.velicidady = 5
}

function detenerMovimiento(){
  capipepo.velicidadx = 0
  capipepo.velicidady = 0
}

function sePresionaTecla(event){
  switch (event.key) {
    case 'ArrowUp':
      
      break;
  
    default:
      break;
  }
}

window.addEventListener("load", iniciarJuego);
