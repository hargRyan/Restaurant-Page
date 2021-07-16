import './style.css';
import breakfast from './pageOne';


const content = document.getElementById('content');


function test() {
    const element = document.createElement('div');

    element.textContent = "Hello world!"
    element.classList.add('hello');

    return element;
}

document.body.appendChild(test());
document.body.appendChild(breakfast);