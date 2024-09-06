const dotenv = require('dotenv')
const Sequelize = require('sequelize');
const mongoose = require('mongoose')

dotenv.config();

const sequelize = new Sequelize(
    process.env.SQL_DB_NAME || '',
    process.env.SQL_DB_USER || '',
    process.env.SQL_DB_PASS || '',
    {
        host: process.env.SQL_DB_HOST || 'localhost',
        port: Number(process.env.SQL_DB_PORT) || 5432,
        dialect: 'postgres',
        logging: false
    },
);

const connectDatabases = async () => {
    sequelize.authenticate()
        .then(() => console.log('Connection to PostgreSQL database has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the PostgreSQL database:', error));


    mongoose.connect(process.env.NOSQL_DB_URI || 'localhost')
        .then(() => console.log('Connected to MongoDB.'))
        .catch((error) => console.error('Unable to connect to MongoDB:', error));

}

module.exports = { connectDatabases, sequelize, mongoose };
