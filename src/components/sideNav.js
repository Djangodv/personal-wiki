
// Default export (only one per module) can be named anything you'd like
// export default async function sideNav() {
// }

export async function displayEntries(apiData, clickEvent) {

    const fileNav = document.getElementById('file-nav');

    apiData.forEach(entry => {

        const buttonEntryElement = document.createElement('button');
        buttonEntryElement.textContent = entry.name;
        // buttonEntryElement.setAttribute('path', entry.path);

        fileNav.appendChild(buttonEntryElement);

        clickEvent(buttonEntryElement, entry.path);

        // console.log(entry); // Debug
    });

};