// Animacion scroll
function reiniciarColor() {
    let elemento_1 = document.getElementById("nombre-a");
    let elemento_2 = document.getElementById("nombre-span");
    for (let a of [elemento_1, elemento_2]) {
        a.style.color = "white";
    }
}
function cambiarColor() {
    let elemento_1 = document.getElementById("nombre-a");
    let elemento_2 = document.getElementById("nombre-span");
    for (let a of [elemento_1, elemento_2]) {
        a.style.color = "black";
    }
}
function animarCargaBarra (elemento, carga) {
    let objeto = document.getElementById(elemento);
    let carga_actual = 0;
    let intervalo = setInterval(function() {
        carga_actual += 1;
        objeto.style.width = carga_actual + "rem";
        if (carga_actual >= carga) {
            objeto.style.widht = carga - carga_actual + "rem";
            clearInterval(intervalo);
        }
    }, 50);
}
function hacerFadeIn (objeto, tiempo) {
    objeto.style.opacity = 0;
    let intervalo = setInterval(function() {
        let actual = parseFloat(objeto.style.opacity);
        if (actual >= 1) {
            clearInterval(intervalo);
        } else {
            objeto.style.opacity = actual + 0.1;
        }
    }, tiempo);
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Inicio escucho de eventos
var scrolleando = false;
window.addEventListener('scroll', function(e) {
    cambiarColor();
})
var temporizador = setInterval(reiniciarColor, 700);
//botones
window.onload = function() {
    // Fade in
    var fadeInFirst = document.getElementsByClassName("fade-in-first");
    for (elm of fadeInFirst) {
        setTimeout(
            hacerFadeIn(elm, 100), 1000
        );
        
    }
    let obj = document.getElementById("nombre-principal");
    setTimeout(
        hacerFadeIn(obj, 200), 5000
    )
    // Boton emepzar
    console.log(
        document.getElementById("navbar").scrollHeight,
        document.getElementById("seccion-home").scrollHeight,
        document.getElementById("seccion-quiensoy").scrollHeight,
        document.getElementById("seccion-habilidades").scrollHeight,
        document.getElementById("seccion-proyectos").scrollHeight,
        document.getElementById("seccion-contactame").scrollHeight
    )
    let largoNavbar = document.getElementById("navbar").scrollHeight;
    let largoHome = document.getElementById("seccion-home").scrollHeight;
    let largoQuien = document.getElementById("seccion-quiensoy").scrollHeight;
    let largoHabilidades = document.getElementById("seccion-habilidades").scrollHeight;
    let largoProyectos = document.getElementById("seccion-proyectos").scrollHeight;
    var botonEmpezar = document.getElementById("boton-empezar");
    botonEmpezar.onclick = function() {
        window.scrollTo({
            top: largoHome-largoNavbar,behavior: 'smooth'
            })
}   
    let elementos = {
        'menu-a-1': 0,
        'menu-a-2': largoHome - largoNavbar,
        'menu-a-3': (largoHome + largoQuien) - largoNavbar,
        'menu-a-4': (largoHome + largoQuien + largoHabilidades) - largoNavbar,
        'menu-a-5': (largoHome + largoQuien + largoHabilidades + largoProyectos) - largoNavbar,

    };
    console.log(elementos)
    // Botones menu
    for (let a in elementos) {
        let btn = document.getElementById(a);
        btn.onclick = function() {
            window.scrollTo({
                top:elementos[a], behavior: 'smooth'
            });
        }
    }
    // Fadein barras
    var idsFadeIn = {
        'python': 20,
        'html': 17.5,
        'css': 12.5,
        'js': 5,
    };
    var tempoCargaBarra = setInterval(
        function() {
            if (isInViewport(document.getElementById('python'))) {
                for (let elm in idsFadeIn) {
                animarCargaBarra(elm, idsFadeIn[elm]);
            }
            console.log("entro");
            clearInterval(tempoCargaBarra)
        }
    }, 500
    );
    
    //Movimiento ojos
    const balls = document.getElementsByClassName('ball');

    document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
    };

    // Mostrar otros proyectos
    // Botones
    let btnEyes = document.getElementById("eyes-boton");
    let btnPacmen = document.getElementById("pacmen-boton");
    let btnBstracker = document.getElementById("bustracker-boton");
    // Cards
    let eyesCard = document.getElementById("eyes-card");
    let pacmenCard = document.getElementById("pacmen-card");
    let bustrackerCard = document.getElementById("bustracker-card");

    btnEyes.onclick = function() {
        eyesCard.style.display = 'none';
        bustrackerCard.style.display = 'block';
    }
    btnPacmen.onclick = function() {
        pacmenCard.style.display = 'none';
        eyesCard.style.display = "block";
    }
    btnBstracker.onclick = function() {
        bustrackerCard.style.display = 'none';
        pacmenCard.style.display = "block";
    }
    // Botones github
    let btnGithubEyes = document.getElementById("giteyes");
    let btnGitbus = document.getElementById("gitbus");
    let btnGitPac = document.getElementById("gitpac");

    btnGithubEyes.onclick = () => {
        window.open("https://github.com/NicolasArciniegas/eyes");
    }
    btnGitbus.onclick = () => {
        window.open("https://github.com/NicolasArciniegas/busTracker");
    }
    btnGitPac.onclick = () => {
        window.open("https://github.com/NicolasArciniegas/PacMenExercise");
    }
}