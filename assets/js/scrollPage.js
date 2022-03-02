const sr = ScrollReveal({
    reset: false,
    duration: 2000

});

sr.reveal(".banner", {
    opacity: 0,
    delay: 100
});

sr.reveal(".cartao_fundo, .cartao_informacoes, .container_contato_redes", {
    origin: 'right',
    distance: '500px',
    delay: 600
});

sr.reveal("#logo_marca", {
    origin: 'left',
    distance: '300px',
    delay: 300
});

sr.reveal("#logo_honda", {
    origin: 'bottom',
    distance: '500px',
    delay: 3800
});

sr.reveal("#spn_frase", {
    origin: 'bottom',
    distance: '100px',
    delay: 300
});

sr.reveal("#btn_insta, #p_sobre_mim", {
    origin: 'bottom',
    distance: '200px',
    delay: 500
});

sr.reveal("#whatsapp", {
    delay: 1000
});
sr.reveal("#instagram", {
    delay: 1250
});
sr.reveal("#facebook", {
    delay: 1450
});

sr.reveal(".smallDelay", {
    opacity: 0,
    delay: 300
});

sr.reveal(".mediumDelay", {
    origin: 'left',
    distance: '200px',
    delay: 600
});

sr.reveal(".largeDelay", {
    delay: 900
});



