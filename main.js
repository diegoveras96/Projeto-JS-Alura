function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');
var i = 0;

while (i < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[i]
    const som = tecla.classList[1];
    const id = `#som_${som}`;
    
    tecla.onclick = function(){
        tocaSom(id);
    };
    
    i++
}