'use strict';

const sound = {
    'A' : 'boom.wav',
    'B' : 'tink.wav'
}

const criaDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sound) => Object.keys(sound).forEach(criaDiv);

const soarAlarme = (opc) => {
    const audio = new Audio('./sounds/${sound[opc]}');
    audio.play();
}
