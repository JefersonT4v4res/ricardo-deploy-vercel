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
var TrasEsq = document.getElementById("TraseiraEsq");
var TrasDir = document.getElementById("traseiraDir");

var info_Motor = document.getElementById("informacao_motor");
var info_Cilindrada = document.getElementById("informacao_cilindrada");
var info_Transmissao = document.getElementById("informacao_transmissao");
var info_Partida = document.getElementById("informacao_partida");
var info_Freios = document.getElementById("informacao_freios");
var lista = [];
var int = 0;
var interesses = "";


for(let i = 0; i < lista_Motos.length; i++){

if (lista_Motos[i].tipo == "Street"){
  street.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='check("+ i +")' class='btn_Tenho_Interesse' id='btn"+i+"' type='submit' >Marcar interesse</button>" +
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>"); 

}else if(lista_Motos[i].tipo == "Adventure"){
  adventure.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='check("+ i +")' class='btn_Tenho_Interesse' id='btn"+i+"' type='submit' >Marcar interesse</button>" +
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>"); 

}else if(lista_Motos[i].tipo == "Off Road"){
  offRoad.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='check("+ i +")' class='btn_Tenho_Interesse' id='btn"+i+"' type='submit'>Marcar interesse</button>" +
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>");

}else if(lista_Motos[i].tipo === "Sport"){
  sport.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='check("+ i +")' class='btn_Tenho_Interesse' id='btn"+i+"' type='submit'>Marcar interesse</button>" +
  "<button class='btn_Saiba_Mais' onclick='sobreMoto("+ i +")'><img class='img_Saiba_Mais' src='../assets/icons/info.png' alt=''></button>"); 
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
    let slide = document.getElementById("slide_imgs");
    let traseiras = "";

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

window.check = function(x){
  var iconCheck = "iconCheck" + x;
  var checkTrue = document.getElementById(iconCheck).style.visibility;
  let botao = "btn"+x;
  var QtdLista = parseInt(document.getElementById("esfera_notificacao").textContent)
  let flag = "";
  
  
  if(checkTrue == "" || checkTrue == "hidden") {
    document.getElementById(botao).style.background = "#E21F1F";
    document.getElementById(botao).style.color = "#fff";
    document.getElementById(botao).textContent = "Desmarcar interesse";
    flag = "add";
    atualizaListaInteresse(flag, x)
    QtdLista += 1;
    document.getElementById("esfera_notificacao").textContent = QtdLista;
    document.getElementById(iconCheck).style.visibility = "visible";
  }else {
     document.getElementById(iconCheck).style.visibility = "hidden";
     document.getElementById(botao).style.background = "#1ad600e3";
     document.getElementById(botao).style.color = "#000";
     document.getElementById(botao).textContent = "Marcar interesse";
     flag = "remove";
     atualizaListaInteresse(flag, x);
     QtdLista -= 1;
    document.getElementById("esfera_notificacao").textContent = QtdLista;
  }

  if(QtdLista != 0) {
     document.getElementById("lista_Interesses").style.display = "flex";
  }else {
    document.getElementById("lista_Interesses").style.display = "none";
  }

}

function atualizaListaInteresse(flag, moto) {
  let div = document.getElementById("motos_Em_Interesse");
  
    if(flag == "add") {
      lista[int] = lista_Motos[moto].nome;
      console.log("Int: " + int + " / Moto Nome: " + lista_Motos[moto].nome);
      interesses += "<div class='interesse'><div class='quadrado'></div><p class='nomeMoto_Interesse'>"+lista[int]+"</p> <button class='deletar_interesse'><img id='icon_remover' src='../assets/icons/remove.png' alt=''></button></div>";
      int++;
    }else {
        let posicao = lista.indexOf(lista_Motos[moto].nome);
        console.log("Antes de remover: " + lista.length + " Posição da moto: " + posicao);
        lista.splice(posicao, 1);
        int--;
        console.log("Depois de remover: " + lista.length);
          for(let y = 0; y < lista.length; y++){
            console.log("Lista Nomes: " + lista[y]);
          }
          interesses = ""
          for(let i = 0; i < lista.length; i++) {
            interesses += "<div class='interesse'><div class='quadrado'></div><p>"+lista[i]+"</p> <button class='deletar_interesse'><img id='icon_remover' src='../assets/icons/remove.png' alt=''></button></div>";
          }
        
    }

      div.innerHTML = interesses;
}