'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Flights',{
      type:"FOREIGN KEY",
      fields:['airplaneId'],
      references:{
        table:'Airplanes',
        field:'id',
      },
      onDelete:'CASCADE',
    })
    await queryInterface.addConstraint('Flights',{
      type:"FOREIGN KEY",
      fields:['departureAirportId'],
      references:{
        table:'Airports',
        field:'code',
      },
      onDelete:'CASCADE',
    })
    await queryInterface.addConstraint('Flights',{
      type:"FOREIGN KEY",
      fields:['arrivalAirportId'],
      references:{
        table:'Airports',
        field:'code',
      },
      onDelete:'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Flights','airplaneId')
    await queryInterface.removeConstraint('Flights','departureAirport')
    await queryInterface.removeConstraint('Flights','arrivalAirportId')
  }
};
