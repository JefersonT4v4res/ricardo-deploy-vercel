import { listaMotos } from './motosLista.js';

var lista_Motos = listaMotos();

var street = document.getElementById("lista_Motos_Street");
var adventure = document.getElementById("lista_Motos_Adventure");
var offRoad = document.getElementById("lista_Motos_offRoad");
var sport = document.getElementById("lista_Motos_Sport");

var saibaMais = document.getElementById("veiculo_Informacoes");
var img_Moto = document.getElementById("slide_imgs");
var nome_Moto = document.getElementById("nome_Moto");
var cores = document.getElementById("lista_Cores");
var frontal = document.getElementById("frontal");
var lateral = document.getElementById("lateral");

var info_Motor = document.getElementById("informacao_motor");
var info_Cilindrada = document.getElementById("informacao_cilindrada");
var info_Transmissao = document.getElementById("informacao_transmissao");
var info_Partida = document.getElementById("informacao_partida");
var info_Freios = document.getElementById("informacao_freios");


for(let i = 0; i < lista_Motos.length; i++){

if (lista_Motos[i].tipo == "Street"){
  street.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<h1 class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>" + 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button class='btn_Tenho_Interesse' type='submit' >Marcar interesse</button>"); 

}else if(lista_Motos[i].tipo == "Adventure"){
  adventure.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<h1 class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>" + 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button class='btn_Tenho_Interesse' type='submit' >Marcar interesse</button>"); 
}else if(lista_Motos[i].tipo == "Off Road"){
  offRoad.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<h1 class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>" + 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button class='btn_Tenho_Interesse' type='submit'>Marcar interesse</button>"); 
}else if(lista_Motos[i].tipo === "Sport"){
  sport.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<h1 class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>" + 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button class='btn_Tenho_Interesse' type='submit'>Marcar interesse</button>"); 
}

}

window.sobreMoto = function(x) {
  let moto = parseInt(x);
  let coloracao = "";
  nome_Moto.textContent = lista_Motos[moto].nome;
  for(var i in lista_Motos[moto].cor){
    if(lista_Motos[moto].cor[i] != "none"){
      if(i == "cor1"){
        var check = lista_Motos[moto].cor[i];
        coloracao += "<li class='cor'><input class='radio_cor' onclick='pegaCor("+moto+")' type='radio' name='coloracao' value='"+lista_Motos[moto].cor[i]+"' id='"+ i +"' checked/><label class='opcoes_Cores' for='"+ i +"'>"+ lista_Motos[moto].cor[i] +"</label></li>";
        slideShow(moto, check);
      }else {
        coloracao += "<li class='cor'><input class='radio_cor' onclick='pegaCor("+moto+")' type='radio' name='coloracao' value='"+lista_Motos[moto].cor[i]+"' id='"+ i +"' /><label class='opcoes_Cores' for='"+ i +"'>"+ lista_Motos[moto].cor[i] +"</label></li>";
      }
      
      cores.innerHTML = coloracao;
    }
    
  }
  info_Motor.textContent = lista_Motos[moto].motor;
  info_Cilindrada.textContent = lista_Motos[moto].cilindrada;
  info_Transmissao.textContent = lista_Motos[moto].transmissao;
  info_Partida.textContent = lista_Motos[moto].partida;
  info_Freios.textContent = lista_Motos[moto].freio;

  saibaMais.style.display = "flex";
  document.body.style.overflow = "hidden";
}




function slideShow(moto, cor){
  let slide = "";

  let imgFrontal = "../assets/img/_motos/"+ lista_Motos[moto].nome +"/"+ cor +"/frontal.webp";
  let imgLateral = "../assets/img/_motos/"+ lista_Motos[moto].nome +"/"+ cor +"/lateral.webp";

  frontal.src = imgFrontal;
  lateral.src = imgLateral;
}

window.pegaCor = function(moto) {
var radios = document.getElementsByName("coloracao");

var value;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        value = radios[i].value;  
        slideShow(moto, value);   
    }
  }
  
}
