const sr = ScrollReveal({
    reset: false,
    duration: 2000
});

sr.reveal(".cartao_fundo, #informacoes_cartao, .container_contato_redes", {
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
    distance: '300px',
    delay: 4000
});
sr.reveal("#btn_insta, #p_sobre_mim, #spn_frase", {
    origin: 'bottom',
    distance: '200px',
    delay: 500
});
sr.reveal("#whatsapp, #instagram, #facebook, .cards_atendimento", {
    delay: 700
}, 250);
sr.reveal("#img_ricardo_perfil, #seta_tracejada", {
    origin: 'left',
    distance: '300px',
    delay: 900
}, 200);
sr.reveal(".smallDelay, #secao_sobre, #secao_atendimento, #secao_contato", {
    opacity: 0,
    delay: 300
});
