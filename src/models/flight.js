'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
      })
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId'
      })
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirport',
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:"Airplanes",
        key:'id',
      }
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false,
      references:{
        model:'Airports',
        key:'code',
      },
      onDelete:'CASCADE',
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false,
      references:{
        model:'Airports',
        key:'code',
      },
      onDelete:'CASCADE',
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    pricing: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    boardingGate: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};