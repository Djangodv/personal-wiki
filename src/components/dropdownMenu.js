import * as githubApi from "../services/githubApi.js";
import * as markedUtil from "../services/markedUtil.js";

async function generateHeaders(buttonElement, filename, filePath) {

    const dropdownElement = document.createElement('div');
    dropdownElement.className = 'dropdown-container';
    dropdownElement.setAttribute('name', filename);

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
    collapseAll();
    buttonElement.appendChild(dropdownElement);
    
}

// Hide all dropdown menus
function collapseAll() {
    const elements = document.getElementsByClassName('dropdown-container');
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        elements[i].style.display = 'none';
    } 
}

export function toggle(buttonElement, filename, filePath) {

    const dropdownElement = document.querySelector(`[name="${filename}"]`);

    // Checks whether dropdownElement already exists and only creates it, if not
    if (dropdownElement === null) {
        generateHeaders(buttonElement, filename, filePath);
    } else {
        collapseAll();
        dropdownElement.style.display = 'block';
    }

    // console.log(buttonElement.getAttribute('filename')); // Debug
    // console.log(buttonElement.getAttribute('path')); // Debug
}