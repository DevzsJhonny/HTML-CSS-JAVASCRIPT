function Converter() {
  var vlElemento = document.getElementById("valor");
  var valor = vlElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal = valorEmDolar * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Valor convertido em Reais é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}