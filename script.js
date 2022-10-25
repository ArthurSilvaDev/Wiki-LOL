//slider//
let count =1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},3000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio" + count).checked =true;
}
//fim slider//

//validar dados//
function validar(){
    var nome = document.getElementById("nome");
    if (nome.value == ""){
        alert("Nome não informado!");
        nome.focus()
        
    }
    else if (email.value == ""){
        alert("Email inválido!")
        email.focus()
    }
    
}
function mudarZaun(){
    document.getElementById("zaun").style.backgroundImage = "url('../img/zaunFundo.jpg')";
    document.getElementById("zaun").style.textShadow = "1px 1px black";
    
}
function mudarDemacia(){
    document.getElementById("demacia").style.backgroundImage = "url('../img/demaciaFundo.jpg')";
    document.getElementById("demacia").style.backgroundSize = "auto 420px"
    document.getElementById("demacia").style.textShadow = "1px 1px black";
    
   
}
function mudarPiltover(){
    document.getElementById("piltover").style.backgroundImage = "url('../img/piltoverFundo.jpg')";

    document.getElementById("piltover").style.backgroundSize = "auto 400px"
     document.getElementById("piltover").style.textShadow = "1px 1px black";
   
}