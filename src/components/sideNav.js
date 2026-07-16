
// Default export (only one per module) can be named anything you'd like
// export default async function sideNav() {
// }

export async function displayEntries(apiData, clickEvent) {

    const fileNav = document.getElementById('file-nav');

    apiData.forEach(dataEntry => {

        const buttonEntryElement = document.createElement('button');
        buttonEntryElement.textContent = dataEntry.name;

        fileNav.appendChild(buttonEntryElement);

        clickEvent(buttonEntryElement, dataEntry.name, dataEntry.path);

        // console.log(entry); // Debug
    });

};