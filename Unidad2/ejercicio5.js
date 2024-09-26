let listaNotas=prompt("Escribe las notas separados por ;")
let notasSeparadas=listaNotas.split(";")

for(let i=0;i<notasSeparadas.length;i=i+1){
    let nota=parseInt(notasSeparadas[i])
    if(nota>=0 && nota<3){
        console.log("Muy deficiente")
    }else if(nota<5 && nota>=3){
        console.log("Insuficiente")
    }else if(nota>=5 && nota<6){
        console.log("Bien")
    }else if(nota>=6 && nota<9){
        console.log("Notable")
    }else if(nota>=9 && nota<=10){
        console.log("Sobresaliente")
    }else{
        console.log("La nota tiene que ser entre 0 y 10")
    }
}