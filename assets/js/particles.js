particlesJS("particles-js", {
    particles: {
        number: {
            value: 90,
            density: { enable: true, value_area: 800 }
        },
        color: {
            value: "#1edbee"
        },
        shape: {
            type: "circle",
            stroke: { width: 10, color: "#00e8fd71" },
            polygon: { nb_sides: 10 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: { enable: true, speed: 0.2, opacity_min: 0, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 3, size_min: 2, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 50,
            color: "#ffffff",
            opacity: 0.9,
            width: 2
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
});