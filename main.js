/*----- Codigo suelto -----*/
let vocales = ["ai", "enter", "imes", "ober", "ufat"];
document.getElementById("boton-c").style.display = 'none';

/*----- Funcion para encriptar las vocales -----*/
function encriptarTexto(textoParam) {
    let textoEncriptado = [];
    for (let x = 0; x < textoParam.length; x++) {
        console.log(textoParam[x]);
        switch (textoParam[x]) {
            case "a": textoEncriptado.push("ai");
                break;
            case "e": textoEncriptado.push("enter");
                break;
            case "i": textoEncriptado.push("imes");
                break;
            case "o": textoEncriptado.push("ober");
                break;
            case "u": textoEncriptado.push("ufat");
                break;
            default: textoEncriptado.push(textoParam[x]);
        }
    }
    return textoEncriptado.join("");
}

/*----- Funcion para encriptar el texto final -----*/
function encriptar() {
    let textoIngresado = [];
    textoIngresado = document.getElementById("texto").value;
    if (textoIngresado != "") {
        document.getElementById("textoFinal").textContent = encriptarTexto(textoIngresado);
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("boton-c").style.display = '';
        document.getElementById("texto").value = "";
    }else{
        alert("Ingrese texto");
    }
}

/*----- Funcion para copiar el texto encriptado -----*/
function copiar(){
    var message = document.getElementById("textoFinal");
    console.log("mensaje", message.textContent);
    navigator.clipboard.writeText(message.textContent).then(() => {
        //document.getElementById("boton-p").style.display = '';
        alert("Texto copiado!"); 
    }).catch(() => {
        alert("Fallo!");
    });
}

/*----- Funcion para desencriptar el texto -----*/
function desencriptar(){
    let textoDesencriptada = document.getElementById("texto").value;
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptada = textoDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptada.includes(matrizCodigo[i][1])){
            textoDesencriptada = textoDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            document.getElementById("img1").style.display = "none";
            document.getElementById("img2").style.display = "none";
            document.getElementById("boton-c").style.display = 'none';
        }
    }
    document.getElementById("textoFinal").textContent = textoDesencriptada;
}
