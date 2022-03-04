var app = document.getElementById('app');
var typewriter = new Typewriter(app, {cursor: '|', delay: '100'});

typewriter
    .pauseFor(1400)
    .typeString('Ricardo Motos')
    .deleteChars(5)
    .typeString('Tavares')
    .start();