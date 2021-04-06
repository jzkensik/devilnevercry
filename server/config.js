const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'sparda',
        password: env.DB_PASSWORD || '12345678',
        database: env.DB_NAME || 'devilnevercry_test'
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;