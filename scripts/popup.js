
function afficherPopup(){
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.add("active");
}
function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.remove("active");
}
// faire fonction click partager evenement
function clickPartager(){
    let partager = document.querySelector(".zonePartage button");
    let popupBackground = document.querySelector(".popupBackground");
    partager.addEventListener("click", () =>{

        afficherPopup();
    });
    popupBackground.addEventListener("click", (event) =>{
        if(event.target === popupBackground){
            cacherPopup();
        }
        
    });

}