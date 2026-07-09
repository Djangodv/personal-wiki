import * as githubApi from "../services/githubApi.js";
import * as mainView from "../components/mainView.js";

const DIRECTORY = 'markdown-example'

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

        registerClickEvent(buttonElement, entry);

        // console.log(entry); // Debug
    });
    
};

function registerClickEvent(element, entry) {
    element.addEventListener('click', () => {
        console.log('Entry clicked');
        mainView.displayContent(entry.path);
    });
};