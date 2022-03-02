var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    cursor: '|',
    delay: '150'
});

typewriter
    .pauseFor(850)
    .typeString('Ricardo Tavares')
    .start();
    

