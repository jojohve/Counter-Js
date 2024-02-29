let contatore = 0;
let buttonPiu = document.getElementById("incrementatore");
let buttonMeno = document.getElementById("decrementatore");
let counter = document.getElementById("output");
const pecora1 = document.querySelector(".closed")
const pecora2 = document.querySelector(".open")
const pecora3 = document.querySelector(".open2")

risultato();
ciao();

buttonPiu.addEventListener("click", () => {
    if (pecora1.classList.contains(`closed`)) {
        pecora1.classList.remove(`active`);
        pecora2.classList.remove(`active`);
        pecora3.classList.add(`active`)
    }
    contatore++
    risultato();
    cinquanta();
    cento();
});

buttonMeno.addEventListener("click", () => {
    if (pecora1.classList.contains(`closed`)) {
        pecora1.classList.remove(`active`);
        pecora3.classList.remove(`active`);
        pecora2.classList.add(`active`)
    }
    contatore--
    risultato();
    warning();
});

function risultato() {
    counter.innerHTML = contatore;
}

function cinquanta() {
    if (contatore == 50) {
        alert("Sei un osso duro, perchè non provi con una tisana?");
    }
}

function cento() {
    if (contatore == 100) {
        alert("Non riesci proprio ad addormentarti, perchè non provi con la melatonina?");
    }
}

function ciao() {
    document.addEventListener("DOMContentLoaded", () => {
        alert("Ciao, prova a contare le pecore con me per prendere sonno più velocemente!");
    });
}

function warning() {
    if (contatore == -10) {
        alert("La pecora sta perdendo la pazienza, così farai fatica ad addormentarti!");
    }
  }