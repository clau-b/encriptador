//alert(1)

var textarea = document.getElementById('message');
var sinmensaje = document.getElementById('sinmensaje');
var mensajencriptado = document.getElementById('mensajencriptado');

function encrypt(mensaje) {
    var contenidoinicial = mensaje;
    var contenidoencriptado = '';
    for (var i = 0; i < contenidoinicial.length; i++) {
        if(contenidoinicial[i] == 'a') {
            contenidoencriptado += 'ai';
        } else if(contenidoinicial[i] == 'e') {
            contenidoencriptado += 'enter';
        } else if(contenidoinicial[i] == 'i') {
            contenidoencriptado += 'imes';
        } else if(contenidoinicial[i] == 'o') {
            contenidoencriptado += 'ober';
        } else if(contenidoinicial[i] == 'u') {
            contenidoencriptado += 'ufat';
        } else {
            contenidoencriptado += contenidoinicial[i];
        }
    }
    return contenidoencriptado;
}

function decrypt(mensaje) {
    if(mensaje.indexOf('ai') >= 0) {
        mensaje = mensaje.replaceAll("ai", 'a');
    } 
    if(mensaje.indexOf('enter') >= 0) {
        mensaje = mensaje.replaceAll("enter", 'e');
    }
    if(mensaje.indexOf('imes') >= 0) {
        mensaje = mensaje.replaceAll("imes", 'i');
    }
    if(mensaje.indexOf('ober') >= 0) {
        mensaje = mensaje.replaceAll("ober", 'o');
    }
    if(mensaje.indexOf('ufat') >= 0) {
        mensaje = mensaje.replaceAll("ufat", 'u');
    }

    return mensaje;
}

document.getElementById('encriptar').addEventListener('click', function(e){
    e.preventDefault();
    if (textarea.value == '') {
        sinmensaje.removeAttribute('style');
        return false;
    }
    sinmensaje.style.display = 'none';
    mensajencriptado.innerHTML = encrypt(textarea.value);
    mensajencriptado.removeAttribute('style');
});

document.getElementById('desencriptar').addEventListener('click', function(e){
    e.preventDefault();
    if (textarea.value == '') {
        sinmensaje.removeAttribute('style');
        return false;
    }
    document.getElementById('sinmensaje').style.display = 'none';
    mensajencriptado.removeAttribute('style');
    mensajencriptado.innerHTML = decrypt(textarea.value);
});
