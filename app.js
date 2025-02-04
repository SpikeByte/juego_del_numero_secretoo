let limiteMaximo = 50;
let numeroSecreto 
let tentativas = 1;
let lista = [];

Iniciar();

function reiniciar() {
   limparTela(); 
   Iniciar();
}

function gerarNumeroSecreto () {
      let numeroSecreto = parseInt(Math.random() * limiteMaximo + 1);
      if (lista.includes(numeroSecreto)) {
          return gerarNumeroSecreto();
      } else {
          lista.push(numeroSecreto);
          return numeroSecreto;
      }
  }

function exibirTextoTela(tag, texto) {         // função que exibe texto na tela 
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.6});
}

function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
    document.getElementById('reiniciar').disabled = true 
}

function Iniciar(){
   console.log(lista);
   exibirTextoTela('h1', 'Jogo do número secreto');
   exibirTextoTela('p', `Escolha um número entre 1 e ${limiteMaximo}.`);
   numeroSecreto = gerarNumeroSecreto();
   tentativas = 1;
   
}

function verificarChute() {

   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {
      exibirTextoTela('h1','Acertou!');
      exibirTextoTela('p', `Você Descobriu o Número secreto. Depois de ${tentativas} Tentativas.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      tentativas++;
      if (chute > numeroSecreto){
         exibirTextoTela('p', 'O número secreto é menor');
      } else {
         exibirTextoTela('p', 'O número secreto é maior');
      }
      document.querySelector('input').value = ''
   }
   }
   

