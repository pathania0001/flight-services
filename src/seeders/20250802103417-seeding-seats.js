'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const seats = [];
    const seatType = ['economic','premium_economic','business','first_class']
    
    for (let row = 1; row <= 5; row++) {
      for (const col of ['A', 'B', 'C', 'D']) {
        seats.push({
          airplaneId: 13,
          row,
          col,
          type: seatType[Math.floor(Math.random() * seatType.length)],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    await queryInterface.bulkInsert('Seats',seats,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats',{});
  }
};
