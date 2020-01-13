let horloge=[];
for(let i=0; i<10; i++) {
    horloge.push(new Horloge(document.body,"kalon.mp3"));
}

function deuxdigits(x) {
    if (x >= 10)
        return x;
    else
        return "0" + x;
}