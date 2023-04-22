// чтобы загружались обновления html
import './index.html'
import './styles/main.css'

console.log("This try will be a lucky!");
console.log("FFаdffF");

const body = document.body;
const heading = document.createElement('h1');
const img = document.createElement('img');

heading.textContent = 'Eah!! I can do this!';
// img.setAttribute('src', example)
body.insertAdjacentElement('afterbegin', heading);



