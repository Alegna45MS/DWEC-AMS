let personas=[]
let nombreEdad
let persona
let mediaEdad
let suma=0

for(let i=0;i<3;i++){
    let personaMap=new Map()
    persona=prompt("Escribe el nombre y edad separado por coma")
    nombreEdad=persona.split(",")
    personaMap.set('nombre',nombreEdad[0])
    personaMap.set('edad',parseInt(nombreEdad[1]))
    personas.push(personaMap)
    suma=suma+personas[i].get('edad')
    mediaEdad=suma/3
}
for(let j=0;j<personas.length;j++){
}




