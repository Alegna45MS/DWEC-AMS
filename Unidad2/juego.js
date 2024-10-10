const PIEDRA='piedra'
const PAPEL='papel'
const TIJERA='tijera'
const CONDICION_GANAR = [`${PIEDRA}${TIJERA}`,`${TIJERA}${PAPEL}`,`${PAPEL}${PIEDRA}`]
const opciones = [PIEDRA,PAPEL,TIJERA]


function obtenerEleccionComputadora(){

    let i = Math.floor(Math.random() * 3); 

    return opciones[i]
}

function determinarGanador(jugador, computadora) {
    
        if (jugador === computadora) {
            return "Es un empate!";
        }if ( CONDICION_GANAR.find((elemento)=> elemento === `${jugador}${computadora}`)) {
            return "¡Ganaste!";
        }
        
        return "¡La computadora gana!";
    }

function solicitarInfoJugador(){
    let partidas_ganadas=0
    let partidas_perdidas=0
    let partidas_empate=0
    let infoJugador=new Map()

    infoJugador.set("Nombre:",prompt("Hola jugador,escribe tu nombre"))
    infoJugador.set ("Ganadas",partidas_ganadas)
    infoJugador.set ("Perdidas",partidas_perdidas)
    infoJugador.set ("Empates",partidas_empate)

    return infoJugador
}

function jugar(){
    let eleccionJugador= -1
    let eleccionComputadora=-1
    

        do {
            
            eleccionJugador= parseInt(prompt("Selecciona: piedra(0) , papel(1) , tijera(2)"))
    
         }while(eleccionJugador >2 || eleccionJugador<0)
    
            eleccionComputadora=obtenerEleccionComputadora()
    
            console.log(`Valores seleccionados: ${eleccionComputadora} - ${opciones[eleccionJugador]} `)
    
            console.log(determinarGanador(eleccionComputadora,opciones[eleccionJugador]))


}
let jugador=solicitarInfoJugador()
jugar()
