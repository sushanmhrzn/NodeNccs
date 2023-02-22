'use strict';

const { sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(sequelize,DataTypes) =>{
    return sequelize.createTable('user',{
      id:{
        autoIncrement: true,
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      address:{
        type:DataTypes.STRING,
        allowNull:false
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false
      },
      phoneNumber:{
        type:DataTypes.BIGINT,
        allowNull:false
      },
      userTypeid:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      status:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      createdAt:{
        type:DataTypes.BIGINT,
        allowNull:false
      },
      createdBy:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      updatedAt:{
        type:DataTypes.BIGINT,
        allowNull:false
      },
      updatedBy:{
        type:DataTypes.INTEGER,
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

  down: (sequelize,DataType) =>
   {
    return sequelize.dropTable('user');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
