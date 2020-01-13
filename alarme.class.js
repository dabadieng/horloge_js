/**
 * une alarme est une div avec un balise audio et 3 balise select pour régler l'heure de l'alarme
 */
class Alarme {
    constructor(parent,audiosrc) {
        let alarme = document.createElement("div");
        parent.appendChild(alarme);
        this.dom=alarme;
        //Titre
        let h2=document.createElement("h2");
        h2.innerHTML="Alarme";
        this.dom.appendChild(h2);
        //balise audio
        this.audioAlarme=document.createElement("audio");
        this.audioAlarme.src=audiosrc;
        this.audioAlarme.controls=true;
        this.audioAlarme.style.display="block";
        this.dom.appendChild(this.audioAlarme);
        
        this.alarmeHeure=new ListeNombre(this.dom,0,23);
        this.alarmeMinute=new ListeNombre(this.dom,0,59);
        this.alarmeSeconde=new ListeNombre(this.dom,0,59);
    }
}