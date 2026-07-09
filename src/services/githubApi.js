const API_URL = 'https://api.github.com/repos/Djangodv/personal-wiki/contents/'

export async function retrieveData(path) {

    const response = await fetch(`${API_URL}${path}`, {
        headers: {
            // 'Authorization': '<token>'
        }
    });

    const data = await response.json();

    return data;

}