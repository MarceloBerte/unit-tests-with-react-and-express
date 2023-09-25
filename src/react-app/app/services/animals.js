
export const getAnimals = async (name = '') => {
    const response = await fetch(`/api/animals/${name}`);
    return await response.json();
};

export const createAnimal = (animal) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/api/animals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: animal })
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
