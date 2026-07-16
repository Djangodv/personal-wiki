import * as markedUtil from "../services/markedUtil.js";
import * as githubApi from "../services/githubApi.js";
import * as masonryLayout from "../components/masonryLayout.js";

export async function displayContent(filePath) {

    const mainContent = document.getElementById('main-content');

    // Only update main-content if the contents are already equal to the one being requested (i.e. button of currently shown file is pressed)
    if (mainContent.getAttribute('path') !== filePath) {
        
        const markdownText = await githubApi.retrieveFile(filePath);

        mainContent.innerHTML = (await markedUtil.parse(markdownText)).content;

        hljs.highlightAll();
        masonryLayout.rearrange('main-content');

        mainContent.setAttribute('path', filePath);
    }
};