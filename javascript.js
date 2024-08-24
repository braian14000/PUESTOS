


function enviar() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad= document.getElementById("edad").value
    let pais= document.getElementById("pais").value
    let posicion= document.getElementById("posicion").value


if (posicion=="1"){
    document.getElementById("mostrar1").innerHTML = nombre   
    document.getElementById("mostrar2").innerHTML = apellido    
    document.getElementById("mostrar3").innerHTML = edad    
    document.getElementById("mostrar4").innerHTML = pais    
    document.getElementById("mostrar5").innerHTML = posicion    
}
else if(posicion=="2"){
    document.getElementById("mostrar6").innerHTML = nombre   
    document.getElementById("mostrar7").innerHTML = apellido    
    document.getElementById("mostrar8").innerHTML = edad    
    document.getElementById("mostrar9").innerHTML = pais    
    document.getElementById("mostrar10").innerHTML = posicion    
}
else if(posicion=="3"){
    document.getElementById("mostrar11").innerHTML = nombre   
    document.getElementById("mostrar12").innerHTML = apellido    
    document.getElementById("mostrar13").innerHTML = edad    
    document.getElementById("mostrar14").innerHTML = pais    
    document.getElementById("mostrar15").innerHTML = posicion    
}

else{
    alert("Hubo un error al colocar sus datos." )

}
}