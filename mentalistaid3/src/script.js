var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var res = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    res.innerHTML = "Você Acertou!";
    console.log(
      "Você acertou o numero! o Numero secreto foi o " + numeroSecreto
    );
  } else if (chute > 10 || chute < 0) {
    res.innerHTML = "Número Invalido!";
    console.log("Numero Invalido, favor inserir um número entre 0 a 10!");
  } else {
    res.innerHTML = "Número errado, tente novamente!";
    //   console.log("Você errou,o numero sorteado foi " + numeroSecreto + "  tente novamente!");
    if (chute < numeroSecreto) {
      res.innerHTML = "O numero Secreto é maior que o seu chute!";
    } else {
      res.innerHTML = "O numero Secreto é menor que o seu chute!";
    }
  }
}
