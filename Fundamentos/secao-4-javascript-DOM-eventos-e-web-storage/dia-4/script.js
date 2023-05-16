const backgroundButton = document.querySelector('#background-color');
const body = document.body;
const fontColorButton = document.querySelector('#font-color');
const fontSizeButton = document.querySelector('#font-size');
//console.log(backgroundButton.children[1]);

const switchBackground = (event) => {
    let color = event.target.textContent;
    localStorage.setItem('backgroundColor', color);
    if (color.includes('white')) body.style.backgroundColor = 'white';
    else if(color.includes('black')) body.style.backgroundColor = 'black';
    else if(color.includes('green')) body.style.backgroundColor = 'green';
    else if(color.includes('blue')) body.style.backgroundColor = 'blue';
    else if(color.includes('yellow')) body.style.backgroundColor = 'yellow';
}

const switchFontColor = (event) => {
    let color = event.target.textContent;
    localStorage.setItem('fontColor', color);
    if (color.includes('black')) body.style.color = 'black';
    else if(color.includes('red')) body.style.color = 'red';
    else if(color.includes('white')) body.style.color = 'white';
}

for (let index = 1; index < backgroundButton.childElementCount; index += 1) {
    backgroundButton.children[index].addEventListener('click', switchBackground);
}
for (let index = 1; index < fontColorButton.childElementCount; index += 1) {
    fontColorButton.children[index].addEventListener('click', switchFontColor);
}
for (let index = 1; index < fontColorButton.childElementCount; index += 1) {
    fontColorButton.children[index].addEventListener('click', switchFontColor);
}