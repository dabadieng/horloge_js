//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date

let horloge = document.createElement("div");
document.body.appendChild(horloge);
horloge.style.border = "4px double #000";
horloge.style.padding = "10px";
horloge.style.fontSize = "40px";
horloge.style.display = "inline-block";
let timer = setInterval(affichage, 1000);

function affichage() {
    let t = new Date();
    horloge.innerHTML = deuxdigits(t.getHours()) + ":" + deuxdigits(t.getMinutes()) + ":" + deuxdigits(t.getSeconds());
}

function deuxdigits(x) {
    if (x >= 10)
        return x;
    else
        return "0" + x;
}

let alarme = document.createElement("div");
document.body.appendChild(alarme);
let heure = document.createElement("select");
alarme.appendChild(heure);
let minute = document.createElement("select");
alarme.appendChild(minute);
let seconde = document.createElement("select");
alarme.appendChild(seconde);

for (let i = 0; i < 60; i++) {
    if (i < 24) {
        let h = document.createElement("option");
        h.value = i;
        h.innerHTML = i;
        heure.appendChild(h);
    }
    if (i < 60) {
        let m = document.createElement("option");
        let s = document.createElement("option");
        m.value = i;
        s.value = i;
        m.innerHTML = i;
        s.innerHTML = i;
        minute.appendChild(m);
        seconde.appendChild(s);
    }

}