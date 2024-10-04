let socios=[]
let nombre
for(let i=0;i<10;i++){
    nombre=prompt("EScribe el nombre del socio")
    socios.push(nombre)
}
console.log("Nombres de socios:")
socios.forEach(function(e){console.log(e)})
console.log("Hay un total de ",socios.length,"socios")
console.log("Socios en orden alfabetico")
let sociosAlfabetico=[]
sociosAlfabetico=socios.sort
sociosAlfabetico.forEach(function(e){console.log(e)})