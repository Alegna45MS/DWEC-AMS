const PIEDRA='piedra';
const PAPEL='papel'
const TIJERA='tijera'
const opciones=['PIEDRA','PAPEL','TIJERA']
const condicion_ganar=[`${PIEDRA}${TIJERA}`,`${TIJERA}${PAPEL}`,`${PAPEL}${PIEDRA}`]

function obtenerOpcion() {
    let opcion=Math.floor(Math.random() * 3)
    return opciones[opcion]
   }


function jugar(){
    let jugador=-1
    let maquina=-1
    do{
        jugador=parseInt(prompt("Escriba:(0)piedra,(1)papel o (2)tijera?"))
    }while(jugador>2 || jugador<0);

    maquina=obtenerOpcion()
    console.log(`Valores seleccionados: ${maquina} - ${opciones[jugador]} `)
    console.log(determinarGanador(jugador,maquina))
    
    
}
function determinarGanador(jugador,maquina){
    if(maquina===jugador){
        return "Empate"
    }else if(condicion_ganar.find((elemento)=>elemento=== `${jugador}${maquina}`)){
        return "Has ganado"
    }
    return "Has perdido"
}

jugar()




