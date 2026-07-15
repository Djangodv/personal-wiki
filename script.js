import * as sideNav from './src/components/sideNav.js'
import * as serviceWorker from './src/services/serviceWorker.js'
import * as githubApi from './src/services/githubApi.js'
import * as mainView from "./src/components/mainView.js";
    
serviceWorker.register();

const apiData = await githubApi.getDirectoryContents('/docs/test-files/');

// const fileNav = document.getElementById('file-nav');

function buttonEntryClicked(element, filePath) {
    element.addEventListener('click', () => {
        // console.log('Entry clicked'); // Debug
        mainView.displayContent(filePath);
    });
};

sideNav.displayEntries(apiData, buttonEntryClicked);