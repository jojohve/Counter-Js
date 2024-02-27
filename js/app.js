let contatore = 0;
let buttonPiu = document.getElementById("incrementatore");
let buttonMeno = document.getElementById("decrementatore");
let counter = document.getElementById("output")

risultato();

buttonPiu.addEventListener("click", () => {
    contatore++
    risultato();
});

buttonMeno.addEventListener("click", () => {
    contatore--
    risultato();
});

function risultato() {
    counter.innerHTML = contatore;
}
