import * as markedUtil from "../services/markedUtil.js";
import * as githubApi from "../services/githubApi.js";
import * as masonaryLayout from "../components/masonaryLayout.js";

export async function displayContent(filePath) {

    const data = await githubApi.retrieveFile(filePath);

    document.getElementById('main-content').innerHTML = (await markedUtil.parse(data)).content;
    hljs.highlightAll();
    masonaryLayout.rearrange('main-content');

};