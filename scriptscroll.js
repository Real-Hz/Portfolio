var sky = document.getElementById('sky'); // Variable qui correspond à l'élement sky (le ciel sur ma page) //
var sun = document.getElementById('sun'); // Variable qui correspond à l'élement sun (le soleil sur ma page) //
var montagneback = document.getElementById('montagneback'); // Variable qui correspond à l'élement montagneback (les montagnes en arrière plan) //
var text = document.getElementById('text'); // Variable qui correspond à l'élement text (le text sur ma page) //
var montagnefront = document.getElementById('montagnefront'); // Variable qui correspond à l'élement montagnefront (les montagnes en premier plan sur ma page) //
var header = document.getElementById('head'); // Variable qui correspond à l'élement header (Mon header sur ma page) //

window.addEventListener('scroll',function(){ // Event qui permet de créer une animation avec le scroll sur la page //
    let value = window.scrollY;
    console.log(value)
    sun.style.top=value * 1.05 + 'px'; // 1.05 est égale à la vitesse que l'élement va avoir quand je scroll //
    sky.style.top=value * 0.25 + 'px';
    montagneback.style.top=value * 0 + 'px';
    montagnefront.style.top=value * 0 + 'px';
    text.style.marginTop = value * 1.75 + 'px';
    header.style.top = value * 0.7 + 'px';
});