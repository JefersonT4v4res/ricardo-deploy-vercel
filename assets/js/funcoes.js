function sendMensage(mensagem) {
  var url = "https://wa.me/5575988464938?text=" + mensagem;

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

  document.getElementById("input").value = "";
  document.getElementById("mensagem").value = "";
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

document.getElementById("btn_Fecha_Informacoes").addEventListener("click", function close() {
  document.getElementById("veiculo_Informacoes").style.display = "none";
  document.body.style.overflow = "auto";
});


document.getElementById("btn_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = 'flex';
  document.getElementById("lista_Interesses").style.zIndex = '25';
  document.body.style.overflow = "hidden";
});

document.getElementById("btn_Fecha_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = 'none';
  document.getElementById("lista_Interesses").style.zIndex = '30';
  document.body.style.overflow = "auto";
});

dragElement(document.getElementById("lista_Interesses"));

function dragElement(elmnt) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	let LOGO = document.getElementById("icon_interesse");
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
		LOGO.style.pointerEvents = "none";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
		LOGO.style.pointerEvents = "auto";
	}
}