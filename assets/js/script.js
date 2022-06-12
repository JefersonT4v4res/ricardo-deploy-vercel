import { listaMotos } from './motosLista.js';

var lista_Motos = listaMotos();

var street = document.getElementById("lista_Motos_Street");
var adventure = document.getElementById("lista_Motos_Adventure");
var offRoad = document.getElementById("lista_Motos_offRoad");
var sport = document.getElementById("lista_Motos_Sport");

var saibaMais = document.getElementById("veiculo_Informacoes");
var nome_Moto = document.getElementById("nome_Moto");
var cores = document.getElementById("lista_Cores");
var frontal = document.getElementById("frontal");
var lateral = document.getElementById("lateral");

var info_Motor = document.getElementById("informacao_motor");
var info_Cilindrada = document.getElementById("informacao_cilindrada");
var info_Transmissao = document.getElementById("informacao_transmissao");
var info_Partida = document.getElementById("informacao_partida");
var info_Freios = document.getElementById("informacao_freios");
var listaMotoNome = [];
var listaMotoCor = [];
var interesses = "";
var int = 0;


for(let i = 0; i < lista_Motos.length; i++){

if (lista_Motos[i].tipo == "Street"){
  street.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='sobreMoto("+ i +")' class='btn_Saiba_Mais' id='btn"+i+"' type='submit' >Saiba mais +</button>"); 

}else if(lista_Motos[i].tipo == "Adventure"){
  adventure.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='sobreMoto("+ i +")' class='btn_Saiba_Mais' id='btn"+i+"' type='submit' >Saiba mais +</button>"); 

}else if(lista_Motos[i].tipo == "Off Road"){
  offRoad.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='sobreMoto("+ i +")' class='btn_Saiba_Mais' id='btn"+i+"' type='submit'>Saiba mais +</button>");

}else if(lista_Motos[i].tipo === "Sport"){
  sport.insertAdjacentHTML("afterbegin", "<div class='card_Moto' id='card_Moto_Street"+ i +"'>" +
  "<img id='iconCheck"+ i +"' class='checked_Icon' src='../assets/icons/icon_Checked.svg' alt='imagem foda da moto'>" +
  "<h1 id='moto"+i+"' class='moto_Nome'>" + lista_Motos[i].nome + "</h1>"+ 
  "<img class='moto_Img' src='"+ lista_Motos[i].url +"' alt='imagem foda da moto'>" + "<button onclick='sobreMoto("+ i +")' class='btn_Saiba_Mais' id='btn"+i+"' type='submit'>Saiba mais +</button>"); 
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
        coloracao += "<li class='cor'><input class='radio_cor' onclick='imgCor("+moto+")' type='radio' name='coloracao' value='"+lista_Motos[moto].cor[i]+"' id='"+ i +"' checked/><label class='opcoes_Cores' for='"+ i +"'>"+ lista_Motos[moto].cor[i] +"</label></li>";
        slideShow(moto, check);
      }else {
        coloracao += "<li class='cor'><input class='radio_cor' onclick='imgCor("+moto+")' type='radio' name='coloracao' value='"+lista_Motos[moto].cor[i]+"' id='"+ i +"' /><label class='opcoes_Cores' for='"+ i +"'>"+ lista_Motos[moto].cor[i] +"</label></li>";
      }
      cores.innerHTML = coloracao;
    }
    
  }
  info_Motor.textContent = lista_Motos[moto].motor;
  info_Cilindrada.textContent = lista_Motos[moto].cilindrada;
  info_Transmissao.textContent = lista_Motos[moto].transmissao;
  info_Partida.textContent = lista_Motos[moto].partida;
  info_Freios.textContent = lista_Motos[moto].freio;

  document.getElementById("lista_Interesses").style.position = "sticky";
  document.getElementById("lista_Interesses").style.left = "0rem";
  document.getElementById("lista_Interesses").style.top = "3rem";
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

window.imgCor = function(x){
  let nomeCor = pegaCor();
  slideShow(x, nomeCor);
}

function pegaCor() {
var radios = document.getElementsByName("coloracao");
var value;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        value = radios[i].value;  
        return value;
    }
  }
}

function pegaPosicao(nome) {
  for(let i= 0; i < lista_Motos.length; i++ ){
    if(lista_Motos[i].nome == nome){
        return i;
    }
  }
}

function estaCadastrada(pos, cor){
  let cad = false;
  for (var i = 0; i < listaMotoNome.length; i++) {
    if (listaMotoNome[i] == lista_Motos[pos].nome && listaMotoCor[i] == cor) {
       alert("A moto " + lista_Motos[pos].nome + " na cor "+ cor + " já foi selecionada" );
        cad = true;
    }
  }
  return cad;
}

window.check = function() {
  let cor = pegaCor();
  listaMotoCor[int] = cor;
  let nome = document.getElementById("nome_Moto").textContent;
  let pos = pegaPosicao(nome);
  
  let iconCheck = "iconCheck"+ pos; //Aqui é para pegar o ID do ícone de Check
  document.getElementById(iconCheck).style.visibility = "visible";
 
  //Verifica se moto e cor já foram cadastradas
  let cadastro = estaCadastrada(pos, cor);
 if(cadastro == false){ //cadastra em interesses
    adicionaItemInteresse(pos, cor)
    incrementaIndiceLista(1);
 }

}

function incrementaIndiceLista(qtd) {
  let QtdLista = parseInt(document.getElementById("esfera_notificacao").textContent)//Aqui é para pegar o valor de itens na lista
   QtdLista += qtd;
  document.getElementById("esfera_notificacao").textContent = QtdLista;

  if(QtdLista > 0) {
    document.querySelector("#lista_Interesses").style.display = "flex";
    document.getElementById("lista_Interesses").style.position = "sticky";
    document.getElementById("lista_Interesses").style.left = "0rem";
    document.getElementById("lista_Interesses").style.top = "3rem";
  }else {
    document.querySelector("#lista_Interesses").style.display = "none";
  }
}

function adicionaItemInteresse(moto, cor) {
  let div = document.getElementById("motos_Em_Interesse");

    listaMotoNome[int] = lista_Motos[moto].nome;
    interesses += "<div class='interesse'><div class='quadrado'></div><div id='moto_NomeCor'><p class='moto_NomeInteresse' id='moto_Nome'>"+listaMotoNome[int]+"</p><p class='moto_CorInteresse' id='moto_Cor'>Cor: "+cor+"</p></div><button onclick='removeItemLista("+int+")' class='deletar_interesse'><img id='icon_remover' src='../assets/icons/remove.png' alt=''></button></div>";
    int++;
    div.innerHTML = interesses;
}

window.removeItemLista = function(pos){
  let div = document.getElementById("motos_Em_Interesse");
  let qtd = 0;
  let nome = listaMotoNome[pos];

  for(var i = 0; i < listaMotoNome.length; i++) {
    if(listaMotoNome[i] == listaMotoNome[pos]) {
      qtd += 1;
      console.log("Moto: " + listaMotoNome[pos] +" /Quantidade: " + qtd);
    }
  }
  
  let posNomeArray = listaMotoNome.indexOf(listaMotoNome[pos]);
    listaMotoNome.splice(posNomeArray, 1);
  let posCorArray = listaMotoCor.indexOf(listaMotoCor[pos]);
    listaMotoCor.splice(posCorArray, 1);
    int--;
    qtd -= 1;

  interesses = ""
  for(let i = 0; i < listaMotoNome.length; i++) {
    interesses += "<div class='interesse'><div class='quadrado'></div><div id='moto_NomeCor'><p class='moto_NomeInteresse' id='moto_Nome'>"+listaMotoNome[i]+"</p><p class='moto_CorInteresse' id='moto_Cor'>"+listaMotoCor[i]+"</p></div><button onclick='removeItemLista("+i+")' class='deletar_interesse'><img id='icon_remover' src='../assets/icons/remove.png' alt=''></button></div>";
  }
  div.innerHTML = interesses;

  incrementaIndiceLista(-1);

  if(qtd == 0){
    let value = pegaPosicao(nome);
    let iconCheck = "iconCheck"+ value; //Aqui é para pegar o ID do ícone de Check
    document.getElementById(iconCheck).style.visibility = "hidden";
  }
}