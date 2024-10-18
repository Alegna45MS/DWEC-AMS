let estructura=new Set()
const parrafo1={
    titulo: "Primer bloque de parrafo",
    hijos: ["Este es el primer parrafo","Este es el segundo parrafo","ESte es el tercer parrafo"]

};
const parrafo2={
    titulo: "Segundo bloque de parrafos",
    hijos: ["Este es el primer parrafo","Este es el segundo parrafo","ESte es el tercer parrafo"]

};
function crearElemntos(tipo,contenido,padre){
    /*Crear etiqueta*/
    let hijo=document.createElement(tipo)
    /*En la etiqueta,meter contenido*/
    hijo.innerHTML=contenido;
    /*Añadir al body*/
    padre.appendChild(hijo);

    hijo.addEventListener("click",function(){
        console.log(this.innerHTML);
        //this.remove()
    })
        

    }

crearElemntos("h1",parrafo1.titulo,document.body)

parrafo1.hijos.forEach(e => {
    crearElemntos("p",e,document.body)
});
crearElemntos("h1",parrafo2.titulo,document.body)

parrafo2.hijos.forEach(e => {
    crearElemntos("p",e,document.body)
});


//let h1=document.createElement("h1");
//h1.innerHTML=parrafo1.titulo;
//document.body.append(h1)

/*let hijo=null;

parrafo1.hijos.forEach(e => {
    hijo=document.createElement("p")
    hijo.innerHTML=e
    document.body.appendChild(hijo)
});*/

//let h2=document.createElement("h1");
//h2.innerHTML=parrafo2.titulo;
//document.body.append(h2)

/*parrafo2.hijos.forEach(e => {
    hijo=document.createElement("p")
    hijo.innerHTML=e
    document.body.appendChild(hijo)
});*/

