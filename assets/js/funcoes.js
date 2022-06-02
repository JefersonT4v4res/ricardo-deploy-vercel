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

});


document.getElementById("btn_Fecha_Informacoes").addEventListener("click", function close() {
  document.getElementById("veiculo_Informacoes").style.display = "none";
  document.body.style.overflow = "auto";
});