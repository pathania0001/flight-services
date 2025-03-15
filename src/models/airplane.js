import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
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
      },
      capacity: DataTypes.INTEGER,
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
