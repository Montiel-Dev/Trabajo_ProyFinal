function agregar(LOL) {
    let Actual = document.getElementById("Pantalla").innerHTML;
    let Nuevo = Actual + LOL;

    document.getElementById("Pantalla").innerHTML = Nuevo;

}

function borr() {
    let Borra = document.getElementById("Pantalla").innerHTML;
    let borr = Borra.slice(0, -1);
    document.getElementById("Pantalla").innerHTML = borr;
}

function limpiar() {
    let lim = document.getElementById("Pantalla").innerHTML;
    let limpia = lim.slice(0, 0)
    document.getElementById("Pantalla").innerHTML = limpia;

}

function calcular() {
    let cal = document.getElementById("Pantalla").innerHTML;
    let rest = eval(cal);
    rest = document.getElementById("Pantalla").innerHTML = rest;

}
