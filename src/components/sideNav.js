import * as dropdownMenu from "./dropdownMenu.js";

// Default export (only one per module) can be named anything you'd like
// export default async function sideNav() {
// }

export async function displayEntries(apiData, clickEvent) {

    const fileNav = document.getElementById('file-nav');

    apiData.forEach(dataEntry => {

        const buttonEntryElement = document.createElement('button');
        buttonEntryElement.textContent = dataEntry.name;
        buttonEntryElement.className = 'button-file';
        
        fileNav.appendChild(dropdownMenu.createExpandButton(buttonEntryElement, dataEntry.name, dataEntry.path));
        fileNav.appendChild(buttonEntryElement);

        clickEvent(buttonEntryElement, dataEntry.name, dataEntry.path);

        // console.log(entry); // Debug
    });

};