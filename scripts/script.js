function afficherResultat(score, nbMots){
    let scoreboard = document.querySelector(".zoneScore span");
    scoreboard.textContent = `${score}/${nbMots}`;
}
function afficherPropositions(mot){
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = mot;
}
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
function lancerJeu(){
    clickPartager();
    let score =0;
    let bouton = document.getElementById("btnValiderMot");
    let reponse = document.getElementById("inputEcriture");
    let listeProposition= listeMot;
    let i = 0;


    afficherPropositions(listeProposition[i]);
    bouton.addEventListener("click", () => { 
        if(reponse.value === listeProposition[i]){
            score++;
        }
        i++;
        
        if(listeProposition[i] === undefined){
            afficherPropositions("Le jeu est fini");
            bouton.disabled = true;
        }
        else{
            afficherPropositions(listeProposition[i]);
        }
        console.log(reponse.value);
       
        reponse.value = "";
        afficherResultat(score, i);

        console.log("j'ai cliqué");
        console.log(i);
    });
    
    let radios = document.querySelectorAll(".optionSource input");

    for(let k = 0; k< radios.length; k++){
        radios[k].addEventListener("change", (event) =>{
            if(event.target.value === "1"){
                listeProposition = listeMot;
            }
            else{
                listeProposition = listePhrase;
            }
            afficherPropositions(listeProposition[i]);
        });
    }
    let form = document.querySelector("form");

    form.addEventListener("submit" , (event) => {

        event.preventDefault();
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        let baliseMail = document.getElementById("email");
        let mail = baliseMail.value;
        let scoreMail = `${score} / ${i}`;

        console.log(nom);
        console.log(mail);
        afficherEmail(nom, mail, scoreMail);
    }  )


}
