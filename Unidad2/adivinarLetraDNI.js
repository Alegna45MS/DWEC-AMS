const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L','C', 'K', 'E'];
let historico=new Array()

let DNI=parseInt(prompt("Escribe tu numero de DNI"))
let letra

while(DNI!==-1){
    if(DNI<0 || DNI>99999999){
        alert("Numero no valido")
        DNI=parseInt(prompt("Escribe tu numero de DNI otra vez"))
    }else{
        letra=DNI%23
        console.log("La letra de tu DNI es",letras[letra])
    }
}



