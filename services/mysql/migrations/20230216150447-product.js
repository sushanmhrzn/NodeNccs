'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:(Sequelize, DataTypes)=>{
    return Sequelize.createTable('product',{
      productId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      productName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      price:{
        type:DataTypes.BIGINT,
        allowNull:false
      },
      details:{
        type:DataTypes.STRING,
        allowNull:false
      }
    }); 
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:( Sequelize,DataTypes)=> {
    return Sequelize.dropTable('product');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
