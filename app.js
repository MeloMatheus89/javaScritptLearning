let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', textoTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            
            if ( chute < numeroSecreto){
                exibirTextoNaTela('p','O número secreto é maior');
                console.log(numeroSecreto);
        
                console.log('clicado');
            }
            else {
                exibirTextoNaTela('p','O número secreto é menor');
                console.log(numeroSecreto);
        
                console.log('clicado');
            }
            
            tentativas++;
            limparCampo();
        }
        
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
