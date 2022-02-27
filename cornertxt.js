document.addEventListener('mousemove', cornertxt); // Effet au mouvement de la souris //
function cornertxt(e){ // Fonction pour l'effet //
    this.querySelectorAll('.layer').forEach(Layer => { // Selectione les class h2 ou il y a mon titre //
        let x = (window.innerWidth - e.pageX * 2)/6; // Vitesse du déplacement des textes //
        Layer.style.transform = `translateX(${x}px)`; 
    });
}