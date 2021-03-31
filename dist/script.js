//definir um numero secreto - vamos verificar a logica
var valorDado = 8
var tentativas = 3
var welcome = "Bem vindo ao jogo Banco Imobiliário! Você está na cadeia e para sair você terá que adivinhar qual a soma dos dados que você acabou de jogar!"

alert(welcome)

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  //a pessoa vai chutar o número - este número vai ser convertido para um Int - número inteiro
  
  if (valorDado == chute) {
    document.write("<h2>ACERTOU! AGORA VOCÊ ESTÁ LIVRE PARA JOGAR A PRÓXIMA RODADA.</h2>")
    break
  } else if (chute > valorDado) {
    alert("A soma dos números foi menor, tente novamente")
    tentativas = tentativas - 1
  } else if (chute < valorDado){
    alert("A soma dos números foi maior, tente novamente")
    tentativas = tentativas - 1
  }
} 

  if (chute != valorDado){
    document.write("<h3> SUAS TENTATIVAS ACABARAM. INFELIZMENTE VOCÊ CONTUNUARÁ NA PRISÃO. Atualize a página e tente novamente.</h3>")
  }
    
    
//alem do alert, document.write, temos o console.log - o que colocamos no console, ficará apernas no console, não vai para quem vê - ao clicarmos em 'inspecionar' em uma página da internet, achamos.
//caso ela erre, emitir o alert abaixo e revelamos o numero secreto chamando o numeroSecreto
//fazer um loop (numero de tentativas que o usuario pode tentar responder o numero)
//if - funciona para condições / while - funciona para loops e interações
//colocar espaço antes de fechar as " para dar espaço entre a resposta e o final do texto
// == igual igual
// != diferente