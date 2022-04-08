var nic = { nome: "Rafa", vitorias: 2, empates: 3, derrotas: 1, pontos: 0 };
var jho = { nome: "Jhonny", vitorias: 5, empates: 0, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

nic.pontos = calculaPontos(nic);
jho.pontos = calculaPontos(jho);

var players = [nic, jho];

function exibePlayers(players) {
  var elemento = "";
  for (var i = 0; i < players.length; i++) {
    elemento += "<tr><td>" + players[i].nome + "</td>";
    elemento += "<td>" + players[i].vitorias + "</td>";
    elemento += "<td>" + players[i].empates + "</td>";
    elemento += "<td>" + players[i].derrotas + "</td>";
    elemento += "<td>" + players[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tableJogadores = document.getElementById("tabelaJogadores");
  tableJogadores.innerHTML = elemento;
}

exibePlayers(players);

function adicionarVitoria(i) {
  var jogador = players[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibePlayers(players);
}
function adicionarEmpate(i) {
  var jogador = players[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibePlayers(players);
}

function adicionarDerrota(i) {
  var jogador = players[i];
  jogador.derrota += 1;
  jogador.pontos -= 1;

  if (jogador.pontos < 0) {
    console.log("Jogador " + players[i].nome + " Desclassificado");
    //    exibePlayers(players[i]);
  }
  exibePlayers(players);
}