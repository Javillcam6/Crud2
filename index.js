
const burger = document.querySelector('.burger')
const enlaces = document.querySelector('.enlaces-menu')
const barras = document.querySelectorAll('.burger span')


burger.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado')
    barras.forEach(child => {child.classList.toggle('animado')});
})



// Slider//////////////
let slider = document.querySelector(".slider-containerr")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}
