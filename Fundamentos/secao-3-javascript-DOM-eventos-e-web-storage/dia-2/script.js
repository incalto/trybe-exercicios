const body = document.querySelector('body');
const main = document.querySelector('main');
const section = document.querySelector('section');

const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1)

body.appendChild(document.createElement('main'));
main.classList.add('main-content');

main.appendChild(document.createElement('section'));
section.classList.add('center-content');


