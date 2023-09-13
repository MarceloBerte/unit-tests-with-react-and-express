const connection = {
    'username': process.env.POSTGRES_USER,
    'password': process.env.POSTGRES_PASSWORD,
    'database': process.env.POSTGRES_DB,
    'host': process.env.POSTGRES_HOST,
    'dialect': 'postgres'
};

const config = {
    'production': connection,
    'development': connection,
    'test': {
        ...connection,
        'database': process.env.POSTGRES_TEST_DB
    }
};

module.exports = config;
