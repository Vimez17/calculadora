var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

function numer(numero) {
  var aux = document.getElementById("visor").value;
  if (aux == "0") {
    document.getElementById("visor").value = numero;
  } else {
    document.getElementById("visor").value += numero;
  }
}

// Funcion para dejar en cero la vison
function cero() {
  document.getElementById("visor").value = 0;
  valor1 = "";
  operador = "";
}

function oper(sinal) {
  if (valor1 == "") {
    operador = sinal;
    valor1 = parseFloat(document.getElementById("visor").value);
    document.getElementById("visor").value = "";
  } else {
    switch (operador) {
      case "+":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) + parseFloat(valor2);
        document.getElementById("visor").value = valor1;
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "-":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) - parseFloat(valor2);
        document.getElementById("visor").value = valor1;
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "/":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) / parseFloat(valor2);
        document.getElementById("visor").value = valor1;
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "*":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) * parseFloat(valor2);
        document.getElementById("visor").value = valor1;
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      default:
        resultado = valor1;
        break;
    }
  }
}

function punto() {
  document.getElementById("visor").value += ".";
}

// Funçion para alterar numero a negativo o positio
function masMenos() {
  if (document.getElementById("visor").value == "") {
    document.getElementById("visor").value = "-";
  } else {
    document.getElementById("visor").value = "";
  }
}

function calcular() {
  switch (operador) {
    case "+":
      resultado = valor1 + parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "-":
      resultado = valor1 - parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "/":
      resultado = valor1 / parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    case "*":
      resultado = valor1 * parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
    default:
      resultado = valor1;
      document.getElementById("visor").value = resultado.toLocaleString(
        "pt-BR"
      );
      break;
  }
  valor1 = "";
  operador = "";
}

function porcentage() {
  valor2 = parseFloat(document.getElementById("visor").value);
  if (operador == "*") {
    resultado = (valor1 / 100) * valor2;
  }
  document.getElementById("visor").value = resultado;
}

// Funcion para borrar un caracter
function backspace() {
  del = document.getElementById("visor").value;
  document.getElementById("visor").value = del.length;
  document.getElementById("visor").value = del.substr(0, del.length - 1);
}
