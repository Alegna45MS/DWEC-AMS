let listaNumeros = new Array();
listaNumeros=prompt("Escribre 3 numeros separados por comas");
let lista=listaNumeros.split(",");
let num=0
for(let i=0;i<3;i=i+1){
    num=parseInt(lista[i]);
    if(num>10){
        console.log(num,"es mayor que 10")
    }else{
        console.log(num,"es menor que 10")
    }
}