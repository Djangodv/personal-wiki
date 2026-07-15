const API_URL = 'https://api.github.com/repos/Djangodv/personal-wiki/contents/' // Redundant

const USERNAME = 'Djangodv'
const REPOSITORY = 'personal-wiki'
const BRANCH = 'main'

export async function getDirectoryContents(directoryPath) {

    try {

        const response = await fetch(`https://api.github.com/repos/${USERNAME}/${REPOSITORY}/contents${directoryPath}`, {
            headers: {
                // Optional personal access token, useful for testing
                // 'Authorization': '<token>'
            }
        });
        if (!response.ok) { // Always check for network request errors
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {

        // Catch any errors thrown in the try block (e.g., network issues, HTTP errors)
        console.error('Error fetching data:', error.message);
    }

}

export async function retrieveFile(filePath) {

    try {

        const response = await fetch(`https://raw.githubusercontent.com/${USERNAME}/${REPOSITORY}/refs/heads/${BRANCH}/${filePath}`)
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const markdownText = await response.text();
        return markdownText;

    } catch (error) {

        console.error('Error fetching data:', error.message);
    }
    
}