'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adminUser',[{
    name:'LuffyTaro',
    address:'Lagan',
    password:'Luffy123',
    email:'luffy1@gmail.com',
    phoneNumber:'9880583820',
    userTypeid:'1',
    status:'1'
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
           */
    await queryInterface.bulkDelete('adminUser');

  }
};
