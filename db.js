const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:97c2dd0705204ed4a3e3fb5ef76979ce@localhost:5432/animal-server");

module.exports = db;