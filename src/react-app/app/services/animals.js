
export const getAnimals = async (name = '') => {
    const response = await fetch(`/api/animals/${name}`);
    return await response.json();
};
