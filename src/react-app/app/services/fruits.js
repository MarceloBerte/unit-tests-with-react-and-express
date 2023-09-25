
export const getFruits = async (name = '') => {
    const response = await fetch(`/api/fruits/${name}`);
    return await response.json();
};

export const createFruit = (fruit) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/fruits', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: fruit })
            });

            if (!response.ok) {
                resolve(null);
            }

            resolve(await response.json());
        } catch (error) {
            reject(error);
        }
    });
};
