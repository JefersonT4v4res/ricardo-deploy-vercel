document.getElementById("btn_Fecha_Informacoes").addEventListener("click", function close() {
  document.getElementById("veiculo_Informacoes").style.display = "none";
  document.body.style.overflow = "auto";
});

document.getElementById("btn_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.getElementById("info_Btn_Interesses").addEventListener("click", function abreLista() {
  document.getElementById("secao_ListaInteresse").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.getElementById("btn_Fecha_Interesses").addEventListener("click", function fechaLista() {
  document.getElementById("secao_ListaInteresse").style.display = 'none';
  document.body.style.overflow = "auto";
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img_MotoExemplo");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}