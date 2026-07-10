import * as githubApi from "../services/githubApi.js";
import * as mainView from "../components/mainView.js";

const DIRECTORY = '/docs/test-files/'

// Default export (only one per module) can be named anything you'd like
// export default async function sideNav() {
// }

export async function displayEntries() {

    const fileNav = document.getElementById('file-nav');
    const apiData = await githubApi.retrieveData(DIRECTORY);

    apiData.forEach(entry => {

        const buttonElement = document.createElement('button');
        buttonElement.textContent = entry.name;
        buttonElement.setAttribute('file', entry.path);

        fileNav.appendChild(buttonElement);

        registerClickEvent(buttonElement, entry.path);

        console.log(entry); // Debug
    });
    
};

function registerClickEvent(element, filePath) {
    element.addEventListener('click', () => {
        console.log('Entry clicked'); // Debug
        mainView.displayContent(filePath);
    });
};