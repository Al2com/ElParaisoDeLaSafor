//cuando el usuariuo haga Click en el boton menu en el header
//agragar la clase al menu-open al body
//abrir menu
//elemento, 
const button = document.querySelector('button[type="button"]');
//evento
button.addEventListener('click', openMenu);

//ejecución
function openMenu(event) {
  document.body.classList.add('menu-open');
}
//cerrar menu

//elemento
const closebutton = document.querySelector('menu button[type="button"]');
//evento
closebutton.addEventListener('click',closenMenu)

//ejecuciónfunction openMenu(event) {
 function closenMenu(event) {
   document.body.classList.remove('menu-open');
 }


//ejecucion para cerrar el menu
function closeMenu(event) {
  document.body.classList.remove('menu-open');
}


