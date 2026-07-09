import * as markedUtil from "../services/markedUtil.js";

export async function displayContent(filePath) {

    const respone = await fetch(filePath);
    const data = await respone.text();

    console.log(data);

    document.getElementById('main-content').innerHTML = (await markedUtil.parse(data)).content;

};