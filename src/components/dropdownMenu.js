import * as githubApi from "../services/githubApi.js";
import * as markedUtil from "../services/markedUtil.js";
import * as mainView from "./mainView.js";

async function generateHeaders(buttonElement, filename, filePath) {

    const dropdownElement = document.createElement('div');
    dropdownElement.className = 'dropdown-container';
    dropdownElement.setAttribute('name', filename);

    dropdownElement.addEventListener('click', () => {
        mainView.displayContent(filePath);
    });

    const markdownText = await githubApi.retrieveFile(filePath);
    const headers = await markedUtil.extractHeaders(markdownText);

    headers.forEach(header => {

        const anchorElement = document.createElement('a');
        anchorElement.textContent = header;
        anchorElement.setAttribute('href', '#' + header);

        // console.log(anchorElement.getAttribute('href')); // Debug

        dropdownElement.appendChild(anchorElement);

    });

    // Placed here to counter the slight delay that happens each time generateHeaders() is called
    // collapseAll();

    // Places the dropdown headers directly under the buttonElement itself
    buttonElement.after(dropdownElement);
    
}

// Hide all dropdown menus
export function collapseAll() {
    const elements = document.getElementsByClassName('dropdown-container');
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        elements[i].style.display = 'none';
    } 
}

export function createExpandButton(buttonElement, filename, filePath) {

    const buttonExpandElement = document.createElement('button');

    buttonExpandElement.textContent = 'Expand';
    buttonExpandElement.className = 'button-expand';

    buttonExpandElement.addEventListener('click', () => {
        toggle(buttonElement, filename, filePath);
    });

    return buttonExpandElement;
    
}

export function toggle(buttonElement, filename, filePath) {

    const dropdownElement = document.querySelector(`[name="${filename}"]`);

    // Checks whether dropdownElement already exists and only creates it, when it doesn't
    if (dropdownElement === null) {
        generateHeaders(buttonElement, filename, filePath);
    } else {
        dropdownElement.style.display = 'block';
    }

    // console.log(buttonElement.getAttribute('filename')); // Debug
    // console.log(buttonElement.getAttribute('path')); // Debug
}