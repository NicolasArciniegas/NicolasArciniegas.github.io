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
    let largoSeccion = document.getElementById("seccion-home").scrollHeight;
    let largoNavbar = document.getElementById("navbar").scrollHeight;
    var botonEmpezar = document.getElementById("boton-empezar");
    botonEmpezar.onclick = function() {
        window.scrollTo({
            top: largoSeccion-largoNavbar,behavior: 'smooth'
            })
}   
    let elementos = {
        'menu-a-1': 0,
        'menu-a-2': largoSeccion - largoNavbar,
        'menu-a-3': (largoSeccion*2) - largoNavbar,
        'menu-a-4': (largoSeccion*3) - largoNavbar,
        'menu-a-5': (largoSeccion*4) - largoNavbar,

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
        'js': 13,
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

}