/**
 * Créer un objet contenant une liste déroulante d'entier entre min et max
 */
class ListeNombre {
    constructor(parent,min,max) {
        let select=document.createElement("select");
        this.dom=select;
        parent.appendChild(select);
        for(let i=min; i<=max; i++) {
            let x=document.createElement("option");
            x.innerHTML=deuxdigits(i);
            this.dom.appendChild(x);
        }
    }
}