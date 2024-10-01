function getRandomInt(max) {
    return Math.floor(Math.random() * max);
   }

let listaNumeros = new Array();
const numeroAdivinar=getRandomInt(10)

let numero=prompt("Escribe un numero a adivinar")
if(numero===null){
    console.log("Has salido")
}else{
    numero=parseInt()
    listaNumeros.push(numero)
    while(numero!==numeroAdivinar){
        if(numero>numeroAdivinar){
            numero=parseInt(prompt("El numero que tienes que adivinar es menor.Vuelve a escribirlo"))
            listaNumeros.push(numero)
        }else{
            numero=parseInt(prompt("El numero que tienes que adivinar es mayor.Vuelve a escribirlo"))
            listaNumeros.push(numero)
        }
        console.log(numero)
    }
    console.log("Lo has adivinado.Has introducido",listaNumeros.length,"numeros.",listaNumeros)
}



