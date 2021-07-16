const createDiv = () => document.createElement('div');

const createUnorderedList = numOfListItems => {
    const unordered = document.createElement('ul');

    for (let i = 0; i < numOfListItems; i++){
        const listItem = document.createElement('li');
        unordered.appendChild(listItem);
    }

    return unordered;
}

const breakfast = createDiv();
breakfast.id = "breakfast";

const container = createDiv();
container.id= "container";

const header = createDiv();
header.id = 'header';

const logo = createDiv();
logo.id = 'logo';
logo.textContent = 'Prince Pancakes';

const navbar = createDiv();
navbar.id = 'navbar';

const navUL = createUnorderedList(3);
navUL.id = 'options';


logo.appendChild(navUL);
header.appendChild(logo);
container.appendChild(header);
breakfast.appendChild(container);

export default breakfast;


