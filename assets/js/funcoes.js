document.getElementById("btn_Contato").addEventListener("click", function sendMensage() {
  let nome = document.getElementById("input_Nome").value;
  let assunto = document.getElementById("input_Assunto").value;
  let msg = document.getElementById("input_Mensagem").value;
  msg = window.encodeURIComponent(msg);
    
  var url = "https://wa.me/5571994058033?text=" 
    + "Oi, Ricardo! Me chamo " + nome + "." + "%0A"
    + "Gostaria de falar sobre: " + assunto + "%0A"
    + "Mensagem: " + msg;

    window.open(url, '_blank').focus();
    document.getElementById("input").value = "";
    document.getElementById("mensagem").value = "";

  document.getElementById("input_Nome").value = "";
  document.getElementById("input_Assunto").value = "";
  document.getElementById("input_Mensagem").value = "";

});


document.getElementById("btn_Fecha_Informacoes").addEventListener("click", function close() {
  document.getElementById("veiculo_Informacoes").style.display = "none";
  document.body.style.overflow = "auto";
});

function check(x){
  var iconCheck = "iconCheck" + x;
  var checkTrue = document.getElementById(iconCheck).style.visibility;
  
  var QtdLista = parseInt(document.getElementById("esfera_notificacao").textContent)
  
  if(checkTrue == "" || checkTrue == "hidden") {
    document.getElementById(iconCheck).style.visibility = "visible";
    QtdLista += 1;
    document.getElementById("esfera_notificacao").textContent = QtdLista;
  }else {
     document.getElementById(iconCheck).style.visibility = "hidden";
     QtdLista -= 1;
    document.getElementById("esfera_notificacao").textContent = QtdLista;
  }

  if(QtdLista != 0) {
     document.getElementById("lista_Interesses").style.display = "flex";
  }else {
    document.getElementById("lista_Interesses").style.display = "none";
  }
 
}

document.getElementById("btn_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = 'flex';

});

document.getElementById("btn_Fecha_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = 'none';

});