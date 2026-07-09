const API_URL = 'https://api.github.com/repos/Djangodv/personal-wiki/contents/'

export async function retrieveData(path) {

    try {

        const response = await fetch(`${API_URL}${path}`, {
            headers: {
                // 'Authorization': '<token>'
            }
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {

        console.error('Error fetching data:', error.message)
    }

}