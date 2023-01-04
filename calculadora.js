let valor_a = window.prompt("Qual é o primeiro valor?");
let valor_b = window.prompt("Qual é o segundo valor?");
let operação_selecionada = window.prompt("qual a operação?(* ou /");

if (!valor_a) {
  valor_a = 0;
}

if (!valor_b) {
  valor_b = 0;
}

let resultado;
switch (operação_selecionada) {
  case "*":
    resultado = parseInt(valor_a) * parseInt(valor_b);
    break;
  case "/":
    resultado = parseInt(valor_a) / parseInt(valor_b);
    break;
  default:
    resultado = "uma operação inválida";
}
let exibir = window.confirm("deseja exibir o resultado?");
if (exibir) {
  window.alert("o resultado da operação é " + resultado);
}
function soma(num1, num2) {
  return parseInt(num1) + parseint(num2);
}
