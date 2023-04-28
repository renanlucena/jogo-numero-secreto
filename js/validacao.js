function verificaSeValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>';
        return;
    }

    if(numeroForaIntervalo(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`;
        return;
        
    }


    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3> O numero secreto era ${numeroSecreto} </h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero>numeroSecreto){
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

   
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroForaIntervalo(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload();
    }

})
