const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(h1)

body.appendChild(document.createElement('main'));
const main = document.querySelector('main');
main.classList.add('main-content');

main.appendChild(document.createElement('section'));
const section = document.querySelector('section');
section.classList.add('center-content');

section.appendChild(document.createElement('p'));
const p = document.querySelector('p');
p.innerText = 'Seja bem vindo à TrybeTrip!';

main.appendChild(document.createElement('section'));
document.getElementsByTagName('section')[1].classList.add('left-content');
main.appendChild(document.createElement('section'));
document.getElementsByTagName('section')[2].classList.add('right-content');

const left = document.getElementsByClassName('left-content');
left[0].appendChild(document.createElement('img'));
const image = document.getElementsByTagName('img');
image[0].src = 'https://picsum.photos/200'



const right = document.getElementsByClassName('right-content');
right[0].appendChild(document.createElement('ul'));
const ul = document.getElementsByTagName('ul');
ul[0].appendChild(document.createElement('li')).innerText = 'um';
ul[0].appendChild(document.createElement('li')).innerText = 'dois';
ul[0].appendChild(document.createElement('li')).innerText = 'três';
ul[0].appendChild(document.createElement('li')).innerText = 'quatro';
ul[0].appendChild(document.createElement('li')).innerText = 'cinco';
ul[0].appendChild(document.createElement('li')).innerText = 'seis';
ul[0].appendChild(document.createElement('li')).innerText = 'sete';
ul[0].appendChild(document.createElement('li')).innerText = 'oito';
ul[0].appendChild(document.createElement('li')).innerText = 'nove';
ul[0].appendChild(document.createElement('li')).innerText = 'dez';


const h31 = main.appendChild(document.createElement('h3'));
const h32 = main.appendChild(document.createElement('h3'));
const h33 = main.appendChild(document.createElement('h3'));

h1.classList.add('title');

h31.classList.add('description');
h32.classList.add('description');
h33.classList.add('description');

main.removeChild(document.getElementsByClassName('left-content')[0]);

right[0].setAttribute('align','center');