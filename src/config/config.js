const getEnv = (name) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} not defined in environment`);
    }
    return value;
};

const config = {
    'production': {
        'username': getEnv('POSTGRES_USER'),
        'password': getEnv('POSTGRES_PASSWORD'),
        'database': getEnv('POSTGRES_DB'),
        'host': getEnv('POSTGRES_HOST'),
        'dialect': 'postgres',
    },
    'development': {
        'username': getEnv('POSTGRES_USER'),
        'password': getEnv('POSTGRES_PASSWORD'),
        'database': getEnv('POSTGRES_DB'),
        'host': getEnv('POSTGRES_HOST'),
        'dialect': 'postgres',
    },
    'test': {
        'username': getEnv('POSTGRES_USER'),
        'password': getEnv('POSTGRES_PASSWORD'),
        'database': getEnv('POSTGRES_TEST_DB'),
        'host': getEnv('POSTGRES_HOST'),
        'dialect': 'postgres',
    }
};

module.exports = config;
