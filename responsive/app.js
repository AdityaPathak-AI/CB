const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('ham_active');
});