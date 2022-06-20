function sendMensage(mensagem) {
    var url = "https://wa.me/5575988006438?text=" + mensagem;  
    window.open(url, '_blank').focus();
}
  
document.getElementById("btn_Contato").addEventListener("click", function formateMensage() {
    let nome = document.getElementById("input_Nome").value;
    let assunto = document.getElementById("input_Assunto").value;
    let msg = document.getElementById("input_Mensagem").value;
    msg = window.encodeURIComponent(msg);
  
    let msgFormatada = "Oi, Ricardo! Me chamo " + nome + "." + "%0A" +
      "Gostaria de falar sobre: " + assunto + "%0A%0A" +
      "Mensagem: " + msg;
  
    sendMensage(msgFormatada);
  
    document.getElementById("input_Nome").value = "";
    document.getElementById("input_Assunto").value = "";
    document.getElementById("input_Mensagem").value = "";
});
  
document.getElementById("whatsapp").addEventListener("click", function msgInfoMoto() {
    let nome = document.getElementById("nome_Moto").textContent;
    let cor;
    var radios = document.getElementsByName("coloracao");
  
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        cor = radios[i].value;
      }
    }
  
    let msg = "Oi, Ricardo! Eu gostaria de falar sobre a moto " + nome 
    + " e a possibilidade dela na cor " + cor;
  
    sendMensage(msg);
});
  
document.getElementById("btn_enviar").addEventListener("click", function msgListaInteresse() {
    let nomes = document.querySelectorAll(".moto_NomeInteresse");
    let cores = document.querySelectorAll(".moto_CorInteresse");
    var msg;
  
    for(let i = 0; i < nomes.length; i++) {
      document.getElementById("input_Mensagem").value += "\nMoto: " + nomes[i].textContent + " // " + cores[i].textContent + ".\n";
    }
      msg = document.getElementById("input_Mensagem").value;
      msg = window.encodeURIComponent(msg);
  
    let texto = "Oi, Ricardo! Olhando o catálogo acabei ficando interessado pela(s) seguinte(s) moto(s): " + msg;
    sendMensage(texto);
    document.getElementById("input_Mensagem").value = "";
  });