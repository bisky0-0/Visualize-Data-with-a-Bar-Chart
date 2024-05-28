export const data = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json');
        if (!res.ok) {
            throw new Error('bad request');
        }
        const jsonData = await res.json();
        return jsonData.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Return null or handle error appropriately
    }
};
