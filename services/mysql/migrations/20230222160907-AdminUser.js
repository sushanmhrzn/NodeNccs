'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('AdminUser',{
      id:{
        autoIncrement:true,
        allowNull:false,
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true
      },
      name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      address:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      password:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      phoneNumber:{
        type:Sequelize.DataTypes.BIGINT,
        allowNull:false
      },
      userTypeid:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      status:{
        type:Sequelize.DataTypes.INTEGER,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('AdminUser');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
