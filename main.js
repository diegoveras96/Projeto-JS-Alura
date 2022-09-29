function tocaSom(idAudio) {
    document.querySelector(idAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');
var i = 0;

while (i < listaDeTeclas.length){
    
    listaDeTeclas[i].onclick = tocaSom;
    
    i++
    console.log(i)
}