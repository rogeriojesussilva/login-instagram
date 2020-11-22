let contador = -1;
let imagem = document.getElementById("img-celular");
let imgs =  ['./img/img-celular-1.png', './img/img-celular-2.png', './img/img-celular-3.png'];

function nextVal() {
    contador++;
    if (contador > 2) {
        contador = 0;
    }
    return contador;
}

function changeImage() {
    imagem.setAttribute('src', imgs[nextVal()]);
}

window.setInterval(changeImage,1900);
