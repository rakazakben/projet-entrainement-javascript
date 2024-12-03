function afficherResultat(score, nbMots){
    let scoreboard = document.querySelector(".zoneScore span");
    scoreboard.textContent = `${score}/${nbMots}`;
}
function selecteur(){
    let choix = prompt("choisissez phrases ou mots");
    while(choix !== "mots" && choix !== "phrases"){
        choix = prompt("voulez vous jouer avec des mots ou des phrases ?");
    }
    return choix;
}
function lancerBoucleJeu(listePropositions){
   let score = 0;
   let motecrit
    for(let i = 0; i<listePropositions.length; i++){
        motecrit = prompt("entrez le mot : "+listePropositions[i]);
        if(motecrit === listePropositions[i]){
            score ++;
            console.log("bonne reponse");
    
        }
        else{
            console.log("mauvaise reponse");
        }
    }
    return score;
}
function lancerJeu(){
    let choix = selecteur();
    let score =0;
    let nbMots =0;
    if(choix === "mots"){
        nbMots = listeMot.length
        score = lancerBoucleJeu(listeMot);
    }
    else{
        score= lancerBoucleJeu(listePhrase);
        nbMots = listePhrase.length
    }
    afficherResultat(score, nbMots);


}
