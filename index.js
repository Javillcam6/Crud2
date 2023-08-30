const burger = document.querySelector('.burger')
const enlaces = document.querySelector('.enlaces-menu')
const barras = document.querySelectorAll('.burger span')


burger.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado')
    barras.forEach(child => {child.classList.toggle('animado')});
})