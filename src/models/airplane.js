
const {Model,DataTypes} = require('sequelize');
const airplaneModel = (sequelize) => {
  class Airplane extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isAlphanumeric:true,
        },
        unique: true,
      },
      capacity:{
       type: DataTypes.INTEGER,
       defaultValue:0,
       validate:{
        max:1000,
       }
        
      } 
    },
    {
      sequelize,
      modelName: "Airplane",
      tableName: "airplanes",
      timestamps: true,
    }
  );

  return Airplane;
};

module.exports = airplaneModel;