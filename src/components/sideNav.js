import * as githubApi from "../services/githubApi.js";
import * as mainView from "../components/mainView.js";

const DIRECTORY = 'docs/test-files/'

// Default export (only one per module) can be named anything you'd like
// export default async function sideNav() {
// }

export async function displayEntries() {

    const fileNav = document.getElementById('file-nav');
    // const apiData = await githubApi.retrieveData(DIRECTORY);

    const response = await fetch(DIRECTORY);
    const data = await response.text();

    const textElement = document.createElement('html');
    textElement.innerHTML = data;

    // console.log(data); // Debug
    // console.log(textElement); // Debug

    const directoryData = textElement.querySelectorAll(`[href^="/personal-wiki/${DIRECTORY}"]`);

    directoryData.forEach(file => {

        const buttonElement = document.createElement('button');
        buttonElement.textContent = file.title;
        buttonElement.setAttribute('file', file.href);

        fileNav.appendChild(buttonElement);

        registerClickEvent(buttonElement, file.href);

        // console.log(file); // Debug
    });
    
};

function registerClickEvent(element, filePath) {
    element.addEventListener('click', () => {
        console.log('Entry clicked');
        mainView.displayContent(filePath);
    });
};