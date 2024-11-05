let boton = document.getElementById("idBoton");
let cuerpoPagina = document.body;

cuerpoPagina.addEventListener("click", acciones);
//cuerpoPagina.onclick=acciones;

function cambiaColoraleatorio() {
  let rojo = Math.floor(Math.random() * 256);
  let verde = Math.floor(Math.random() * 256);
  let azul = Math.floor(Math.random() * 256);
  cuerpoPagina.setAttribute(
    "style",
    `background-color: rgb(${rojo}, ${verde}, ${azul})`
  );
}
function resetearColor(){
  cuerpoPagina.setAttribute(
    "style",
    `background-color: white`
  );
}
function acciones(evento) {  
  if(evento.target.id === "idcuerpo"){
    resetearColor()
  }else{
    cambiaColoraleatorio()
  }  
  console.log("ejecutando")
}
