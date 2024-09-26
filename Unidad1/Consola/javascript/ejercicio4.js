let sueldo
let anyos


for(let i=0;i<5;i=i+1){
    sueldo=prompt("Escribe tu sueldo")
    anyos=prompt("Escribe tus años de antiguedad")
    if (sueldo < 500 && anyos >= 10) {
        sueldo *= 3; // Triplicamos el sueldo
        console.log(`Sueldo triplicado: ${sueldo}`);
      } else if (sueldo < 500 && anyos < 10) {
        sueldo *= 2; // Doblamos el sueldo
        console.log(`Sueldo doblado: ${sueldo}`);
      } else {
        console.log(`Sueldo sin cambios: ${sueldo}`);
      }
    }