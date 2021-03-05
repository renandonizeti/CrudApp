const Sequelize = require('sequelize');
const sequelize = require ('../database/database.js');

const User = sequelize.define("user", {
    id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    name: {
        allownull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3,100]
        } 
    },

    contact: {
        allownull: false,
        type: Sequelize.STRING(20),
    },

    email: {
        allownull: false,
        type: Sequelize.STRING(100),
    },

    adress: {
        allownull: false,
        type: Sequelize.STRING(100),
    }

});

module.exports = User;
