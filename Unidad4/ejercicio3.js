function numAle() {
    let num=Math.random()*1
    return num
}

let boton=document.createElement("button")
boton.innerHTML="crear checkbox";
document.body.append(boton)
document.body.append(document.createElement("br"))

let divv=getElementById("divCheckbox");

boton.addEventListener("click",function(){
    let num=parseInt(numero.value)
    for(let i=0;i<num;i++){
        //Crear checkbox
        let check=document.createElement("input");
        check.setAttribute("type","checkbox")
        check.setAttribute("name","numero")
        document.divv.appendChild(check)
        //crear label numero
        let numero=document.createElement("label")
        numero.setAttribute("for","numero")
        numero.innerHTML=numAle();
        document.divv.appendChild(numero)
        //crear br
        document.body.append(document.createElement("br"))
        
    }
})


