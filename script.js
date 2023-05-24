let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function clique_botao()
{
    alert("É um prezer ter você por dentro da nossas novidades!");
}