class Horloge {
    constructor(parent,alarmeAudio) {        
        let div = document.createElement("div");
        parent.appendChild(div);
        this.dom=div;
        this.dom.style.border = "4px double #000";
        this.dom.style.padding = "10px";
        this.dom.style.fontSize = "40px";
        this.dom.style.display = "inline-block";
        this.alarme=new Alarme(parent,alarmeAudio);
        this.timer = setInterval(()=>this.affichage(), 1000);
    }

    affichage() {
        let t = new Date();    
        this.dom.innerHTML = deuxdigits(t.getHours()) + ":" + deuxdigits(t.getMinutes()) + ":" + deuxdigits(t.getSeconds());                
        let chaine=this.alarme.alarmeHeure.dom.value + ":" + this.alarme.alarmeMinute.dom.value + ":" + this.alarme.alarmeSeconde.dom.value;
        if (chaine==this.dom.innerHTML)
            this.alarme.audioAlarme.play();
        
    }
}