const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || 'postgres',
    dbName: process.env.DB_NAME || 'irvingvjuarez',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPassword: process.env.DB_PASSWORD || 'toor',
    dbPort: process.env.DB_PORT || '5432'
}

module.exports = config;