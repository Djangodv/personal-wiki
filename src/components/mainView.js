import * as markedUtil from "../services/markedUtil.js";

export async function displayContent(filePath) {

    const data = fetchFile(filePath);

    document.getElementById('main-content').innerHTML = (await markedUtil.parse(data)).content;
    hljs.highlightAll();

};

async function fetchFile(filePath) {

    try {

        const respone = await fetch(filePath);
        if (!response.ok) { // Always check for network request errors
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await respone.text();
        console.log('Data:', data); // Debug
        return data;

    } catch (error) {

        // Catch any errors thrown in the try block (e.g., network issues, HTTP errors)
        console.error('Error fetching data:', error.message)
    }
}