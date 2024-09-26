let listaNotas=prompt("Escribre una lista de notas separados por ,")
let notasSeparadas=listaNotas.split(",")
let booleano=false
let nota
for (let i=0;i<notasSeparadas.length;i++){
    nota=parseInt(notasSeparadas[i])
    if(nota===10){
        booleano=true
    }
}
if(booleano===true){
    console.log("SI")
}else{
   console.log("NO") 
}

