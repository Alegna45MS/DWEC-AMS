let contador=60
let reloj=function(){
    contador--
    console.log("00:",contador)
    if(contador===0){
        console.log("Se acabo el tiempo")
        clearTimeout(id)
    }
}
console.log("1:00")
let id=setInterval(reloj,1000)