function encriptar(){
    var texto = document.getElementById("input-text").value.toLocaleLowerCase();
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    
    
    document.getElementById("input-text").value = "";
    document.getElementById("image-lupa").style.display = "none";
    document.getElementById("text-lupa").style.display = "none";
    document.getElementById("text-area").innerHTML = textoCifrado;
    document.getElementById("text-area").style.display = "block";
    document.getElementById("copy").style.display = "block";
    document.getElementById("copy").style.diplay = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-text2").value.toLocaleLowerCase();

    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("input-text2").value = "";
    document.getElementById("image-lupa").style.display = "none";
    document.getElementById("text-lupa").style.display = "none";
    document.getElementById("text-area").innerHTML = textoCifrado;
    document.getElementById("text-area").style.display = "block";
    document.getElementById("copy").style.display = "block";
    document.getElementById("copy").style.diplay = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#text-area");
    contenido.select();
    document.execCommand("cut")
    alert("Texto copiado!");
}

function copiado(){
    var contenido = document.querySelector("#text-area");
    var texto = contenido.value;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado!");
    
}