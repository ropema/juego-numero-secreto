let numeroGeneradoMaquina=0;
let intentos=1;
let listaNumerosGenerados=[];
let numeroMaximo=100;
function insertarTextoHTML(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function verificaNumero(){
    let numeroIngresadoUsuario=parseInt(document.getElementById('numeroUsuario').value);
    if(numeroGeneradoMaquina==numeroIngresadoUsuario){
        insertarTextoHTML('p', `Acertaste en ${intentos} ${intentos==1? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        intentos++;
        limpiarCaja();
        if(numeroGeneradoMaquina>numeroIngresadoUsuario){
            insertarTextoHTML('p', 'El número es mayor');
        }else{
            insertarTextoHTML('p', 'El número es menor');
        }
    }
    return;
}
function generaNumero(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosGenerados);
    if(listaNumerosGenerados.length==numeroMaximo){
        insertarTextoHTML('p','Se han generado todos los números posibles');
    }else{
        if(listaNumerosGenerados.includes(numeroGenerado)){
            return generaNumero();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja(){
    let valorCaja=document.querySelector('#numeroUsuario');
    valorCaja.value="";
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mostrar mensaje de intervalo de números
    insertarTextoHTML('p', `Porfavor, ingresa un número entero desde el 1 al ${numeroMaximo}`);
    //generar el número de la maquina
    numeroGeneradoMaquina=generaNumero();
    //deshabilitar el botón nuevo juego
    document.getElementById('reiniciar').setAttribute('disable','true');
    //reinicializar el contador de intentos
    intentos=1;

}
insertarTextoHTML('h2', 'Encuentra el número generado por la maquina!');
insertarTextoHTML('p', `Porfavor, ingresa un número entero desde el 1 al ${numeroMaximo}`);
numeroGeneradoMaquina=generaNumero();



