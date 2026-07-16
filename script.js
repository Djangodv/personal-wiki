import * as sideNav from './src/components/sideNav.js'
import * as serviceWorker from './src/services/serviceWorker.js'
import * as githubApi from './src/services/githubApi.js'
import * as mainView from "./src/components/mainView.js";
import * as dropdownMenu from "./src/components/dropdownMenu.js";
    
serviceWorker.register();

const apiData = await githubApi.getDirectoryContents('/docs/test-files/');

// const fileNav = document.getElementById('file-nav');

function buttonEntryClicked(element, filename, filePath) {
    element.addEventListener('click', () => {

        // console.log('Entry clicked'); // Debug
        mainView.displayContent(filePath);
        dropdownMenu.toggle(element, filename, filePath);
    });
};

sideNav.displayEntries(apiData, buttonEntryClicked);