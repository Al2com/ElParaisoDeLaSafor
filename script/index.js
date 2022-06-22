//elemento
const button = document.querySelector('button[type="button"]');
//evento
button.addEventListener('click', openMenu);

//ejecución
function openMenu(event) {
  document.body.classList.add('menu-open');
  
}