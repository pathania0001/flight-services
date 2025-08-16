'use strict';
const {
  Model
} = require('sequelize');
const { ENUMS } = require('../utils/common');
const {BUSINESS,PREMIUM_ECONOMIC,ECONOMIC,FIRST_CLASS} = ENUMS.SEAT_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        as:'airplaneDetails',
      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Airplanes',
        key:'id',
      },
      onDelete:'CASCADE',
    },
    row:  {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    type: {
      type:DataTypes.ENUM,
      values:[BUSINESS,PREMIUM_ECONOMIC,ECONOMIC,FIRST_CLASS],
      defaultValue:ECONOMIC,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};