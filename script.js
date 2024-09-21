function inserir(num) {
  document.querySelector(".resultado").innerHTML += num;
}

function limpar() {
  document.querySelector(".resultado").innerHTML = "";
}

function volteUm() {
  let tela = document.querySelector(".resultado").innerHTML;
  document.querySelector(".resultado").innerHTML = tela.substring(0, tela.length - 1);
}

function operacao() {
  let resultado = document.querySelector(".resultado").innerHTML;
  if (resultado) {
    document.querySelector(".resultado").innerHTML = eval(resultado);
  } else {
    document.querySelector(".resultado").innerHTML = "Nenhum comando";
  }
}