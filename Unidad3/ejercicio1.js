let ventana=function(){
    let nuevaVentana=window.open();
    nuevaVentana.document.write("Hola,te estoy observando")
}

setTimeout(ventana,7000)
