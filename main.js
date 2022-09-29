function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (var i = 0; i < listaDeTeclas.length; i++){
    const tecla= listaDeTeclas[i];
    const som = tecla.classList[1];
    const id = `#som_${som}`;

    tecla.onclick = function(){
        tocaSom(id);
    };
}
