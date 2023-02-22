'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('userType',{
        id:{
          autoIncrement:true,
          type:Sequelize.DataTypes.INTEGER,
          allowNull:false,
          primaryKey:true
        },
        name:{
          type:Sequelize.DataTypes.STRING,
          allowNull:false
        },
        isActive:{
          type:Sequelize.DataTypes.BOOLEAN,
          allowNull:false
        }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
