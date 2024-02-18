const Sequelize = require('sequelize');
const db = require('./db');
const User = db.define('users', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//executa quando não houver uma tabela no bando de dados
User.sync();

module.exports = User;