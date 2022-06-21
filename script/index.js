//cuando el usuario haga 'click' en menu agregar la clase menu-open

//elemento para abrir el menu
const button = document.querySelector('button[type="button"]');
//elemeto para cerrar el menu
const closeButton = document.querySelector('menu button[type="button"]');

//evento
button.addEventListener('click', openMenu);
//evento para cerrar el menu
closeButton.addEventListener('click', closeMenu);


//ejecución
function openMenu(event) {
  document.body.classList.add('menu-open');

}
//ejecucion para cerrar el menu
function closeMenu(event) {
  document.body.classList.remove('menu-open');
}

//elemento
// const opcionCerrar = document.getElementById("closem");
//evento
// opcionCerrar.addEventListener("click", closeMenu);
//ejecucion
// function closeMenu(event) {
//   // menuDesp.classList.remove("open-menu");
// }