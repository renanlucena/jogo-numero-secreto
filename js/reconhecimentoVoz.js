const elementoChute = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak);


function onSpeak(e){
    const chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaSeValorValido(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML=`
        <div>Voce disse:</div>
        <span class="box">${chute}</span>

    `
}

recognition.addEventListener('end', ()=> recognition.start());

