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
// Inicio escucho de eventos
var scrolleando = false;
window.addEventListener('scroll', function(e) {
    cambiarColor();
})
var temporizador = setInterval(reiniciarColor, 700);
//botones
window.onload = function() {
    var botonEmpezar = document.getElementById("boton-empezar");
    botonEmpezar.onclick = function() {
        window.scrollTo({
            top: 541,behavior: 'smooth'
            })
}
    let elementos = {
        'menu-a-1': 0,
        'menu-a-2': 570,
        'menu-a-5': 1937,

    };
    for (let a in elementos) {
        let btn = document.getElementById(a);
        btn.onclick = function() {
            window.scrollTo({
                top:elementos[a], behavior: 'smooth'
            });
        }
    }
}