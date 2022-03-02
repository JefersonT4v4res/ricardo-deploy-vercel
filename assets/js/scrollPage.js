const sr = ScrollReveal({
    origin: 'bottom',
    reset: false,
    scale: 0.8,
    duration: 2000
});


sr.reveal(".delaySmallReveal", {
     delay: 300
});
sr.reveal(".delayMediumReveal", {
     delay: 600
});
sr.reveal(".delayLargeReveal", {
    delay: 800
});
sr.reveal(".delayExtraBigReveal", {
    delay: 1200
});

sr.reveal("#div_consultoria", {
    delay: 800
});

sr.reveal("#div_oficina", {
    delay: 950
});

sr.reveal("#div_pecas", {
    delay: 1150
});