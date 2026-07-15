import * as markedUtil from "../services/markedUtil.js";
import * as githubApi from "../services/githubApi.js";
import * as masonryLayout from "../components/masonryLayout.js";

export async function displayContent(filePath) {

    const markdownText = await githubApi.retrieveFile(filePath);

    document.getElementById('main-content').innerHTML = (await markedUtil.parse(markdownText)).content;
    hljs.highlightAll();
    masonryLayout.rearrange('main-content');

};