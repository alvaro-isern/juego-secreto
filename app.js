let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(etiqueta, texto) {
  let elementoHTML = document.querySelector(etiqueta);
  elementoHTML.innerHTML = texto;
  return;
}

CondicionesIniciales();

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    AsignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      AsignarTextoElemento("p", "El numero es menor");
    } else {
      AsignarTextoElemento("p", "El numero es mayor");
    }
    intentos++;
    LimpiarInput();
  }

  return;
}

function LimpiarInput() {
  document.querySelector("#valorUsuario").value = "";
}

function GenerarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(ListaNumerosSorteados);

  //Si ya sorteamos todos los numeros
  if (ListaNumerosSorteados.length === NumeroMaximo) {
    AsignarTextoElemento("p", "Ya se han generado todos los numeros posibles");
    return;
  } else {
    //Si el numero generado esta incluido en la lista
    if (ListaNumerosSorteados.includes(numeroGenerado)) {
      return GenerarNumeroSecreto(); //aplicamos recursividad
    } else {
      ListaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function CondicionesIniciales() {
  AsignarTextoElemento("h1", "Juego del numero secreto");
  AsignarTextoElemento("p", `Ingresa un numero del 1 al ${NumeroMaximo}`);
  numeroSecreto = GenerarNumeroSecreto();
  intentos = 1;
  return;
}

function reiniciarJuego() {
  //limpiar el input
  LimpiarInput();
  //Indicar el mensaje de intevalo de numero
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  CondicionesIniciales();
  //Desactivar el boton reiniciar
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}
