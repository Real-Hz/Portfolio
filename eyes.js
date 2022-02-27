document.addEventListener('mousemove', eyeball); // Effet au mouvement de la souris //
function eyeball(){ // Fonction de l'effet //
    var eye = document.querySelectorAll(".eye"); // Variable correspondantr aux yeux //
    eye.forEach(function (eye) { // Fonction pour un oeil  //
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2); // Mouvement de gauche à droite //
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2); // Mouvement de haut en bas //
        let radian = Math.atan2(event.pageX - x,event.pageY - y); // Position sur la page //
        let rot = (radian * (180 / Math.PI) * -1) + 90;
        eye.style.transform = "rotate("+ rot + "deg)";
    })
}