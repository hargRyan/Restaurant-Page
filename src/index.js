import './style.css';

function test() {
    const element = document.createElement('div');

    element.textContent = "Hello world!"
    element.classList.add('hello');

    return element;
}

document.body.appendChild(test());