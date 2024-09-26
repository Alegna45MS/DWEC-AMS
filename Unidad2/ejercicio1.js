let nombre=prompt("Escribe tu nombre")
let apellido=prompt("Escribe tu apellido")
let listaNumeros = new Array();
listaNumeros=prompt("Escribre 3 numeros separados por comas");
let lista=listaNumeros.split(",");

console.log(`${nombre} ${apellido}`)

let suma=0
let multi=0
let division=0
for(let i=0;i<3;i=i+1){
    suma=suma+parseInt(lista[i])
    multi=multi*parseInt(lista[i])
}
if (lista[2] !== 0) {
    division = lista[0] / lista[2];
} else {
    division = "No se puede dividir entre cero";
}
console.log(suma)
console.log(multi)
console.log(division)






