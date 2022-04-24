import { lista_Motos } from './motosLista.js';

var listaMotos = lista_Motos();

var card = document.getElementById("lista_titulo");

let tamanho = 0;
for(let i = 0; i < 22; i++){
  if(listaMotos[i].tipo == "Street"){
    tamanho += 1;
  }
}

for(let i = 0; i < tamanho; i++){
if (listaMotos[i].tipo == "Street"){

  card.insertAdjacentHTML("afterend", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<h1 class='moto_Nome'>" + listaMotos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ listaMotos[i].url +"' alt='imagem foda da moto'>" + "<button>Saiba mais</button>"); 
}
}



/*function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
    let name= document.getElementById("name").value;
    
      var url = "https://wa.me/5575988464938?text=" 
      + "number: " + number + "%0a"
      + "name: " + name + "%0a"
      + "msg: " + msg;
  
      window.open(url, '_blank').focus();
  }*/