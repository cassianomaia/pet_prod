var passoAtual = 0;
mostraPasso(passoAtual)
var emprestimos = [];
var times = [];

function mostraPasso(n) {
  var x = document.getElementsByClassName("passo");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("voltBtn").style.display = "none";
  } else {
    document.getElementById("voltBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("proxBtn").innerHTML = "Finalizar";
  } else {
    document.getElementById("proxBtn").innerHTML = "Avançar";
  }
}

function avancarPasso(n){

  var x = document.getElementsByClassName("passo");
  if(passoAtual + n >= x.length){
      return;
  }
  x[passoAtual].style.display = "none";
  passoAtual = passoAtual + n;
  mostraPasso(passoAtual);
}


function adiciona_emprestimo(){
  var table = document.getElementById("t_emprestimo").getElementsByTagName('tbody')[0];
  var row = table.insertRow(-1);
  var input = document.getElementById("in_emprestimo");
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  emprestimos.push(input.value)
  cell1.innerHTML = input.value;
  cell2.setAttribute("style", "text-align:right");
  cell2.innerHTML = "<button onclick=\"remover_emprestimo(this)\" class=\"btn btn-default inline\">x</button>"
}

function remover_emprestimo(but){
  linha_selecionada = but.parentElement.parentElement.rowIndex;
  emprestimos.splice(linha_selecionada -1, 1)
  document.getElementById("t_emprestimo").deleteRow(linha_selecionada);
}

function adiciona_time(){
  var table = document.getElementById("t_times").getElementsByTagName('tbody')[0];
  var row = table.insertRow(-1);
  var input = document.getElementById("in_times");
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  cell1.innerHTML = input.value;
  cell2.setAttribute("style", "text-align:right");
  cell2.innerHTML = "<button onclick=\"remover_time(this)\" class=\"btn btn-default inline\">x</button>"
}

function remover_time(but){
  linha_selecionada = but.parentElement.parentElement.rowIndex;
  document.getElementById("my_table").deleteRow(linha_selecionada);
}