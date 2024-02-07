alert('Bem vindos ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 +1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');


    //Condições se acertar
    if(chute == numeroSecreto){
        break;
    }
    //Condições se errar
    else{
        if(chute > numeroSecreto){
            alert('O número secreto é menor que ' + chute);
        }
        else{
            alert('O número secreto é maior que ' + chute);
            }   
    }
    tentativas++
}
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa}`);

