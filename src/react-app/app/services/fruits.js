
export const getFruits = async (name = '') => {
    const response = await fetch(`/api/fruits/${name}`);
    return await response.json();
};
