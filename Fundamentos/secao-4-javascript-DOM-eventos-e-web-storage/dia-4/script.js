const backgroundButton = document.querySelector('#background-color');
const body = document.body;
const fontColorButton = document.querySelector('#font-color');
const fontSizeButton = document.querySelector('#font-size');
const lineHeight = document.querySelector('#line-height');
const fontFamily = document.querySelector('#font-family');
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

const switchFontSize = (event) => {
    let size = event.target.textContent;
    localStorage.setItem('fontSize', size);
    size = size.replace(/\D/g, "");
    if(size == 8) body.style.fontSize = '8pt';
    else if(size == 10) body.style.fontSize = '10pt';
    else if(size == 12) body.style.fontSize = '12pt';
    else if(size == 14) body.style.fontSize = '14pt';
    else if(size == 20) body.style.fontSize = '20pt';
}

const switchLineHeight = (event) => {
    let height = event.target.textContent;
    localStorage.setItem('lineHeight', height);
    if(height.includes('1')) body.style.lineHeight = '1';
    else if(height.includes('normal')) body.style.lineHeight = 'normal';
    else if(height.includes('1.5')) body.style.lineHeight = '1.5';
    else if(height.includes('2.0')) body.style.lineHeight = '2.0';
    else if(height.includes('3.0')) body.style.lineHeight = '3.0';
}

const switchFontFamily = (event) => {
    let family = event.target.textContent;
    localStorage.setItem('fontFamily', family);
    if(family.includes('Arial')) body.style.fontFamily = 'Arial';
    else if(family.includes('Times New Roman')) body.style.fontFamily = 'Times New Roman';
}

for (let index = 1; index < backgroundButton.childElementCount; index += 1) {
    backgroundButton.children[index].addEventListener('click', switchBackground);
}
for (let index = 1; index < fontColorButton.childElementCount; index += 1) {
    fontColorButton.children[index].addEventListener('click', switchFontColor);
}
for (let index = 1; index < fontSizeButton.childElementCount; index += 1) {
    fontSizeButton.children[index].addEventListener('click', switchFontSize);
}
for (let index = 1; index < lineHeight.childElementCount; index += 1) {
    lineHeight.children[index].addEventListener('click', switchLineHeight);
}
for (let index = 1; index < fontFamily.childElementCount; index += 1) {
    fontFamily.children[index].addEventListener('click', switchFontFamily);
}

const getItems = () => {
    body.style.backgroundColor = localStorage.getItem('backgroundColor');
    body.style.color = localStorage.getItem('fontColor');
    body.style.lineHeight = localStorage.getItem('lineHeight');
    body.style.fontSize = localStorage.getItem('fontSize');
    body.style.fontFamily = localStorage.getItem('fontFamily');
}
window.onload = getItems();