require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || 'postgres',
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    apiKey: process.env.API_KEY,
    tokenSecret: process.env.TOKEN_SECRET
}

module.exports = config;