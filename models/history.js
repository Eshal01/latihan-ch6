'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Biodata,{
        foreignKey: 'biodata_id' 
      })
      this.belongsTo(models.User,{
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })

    }
  }
  History.init({
    biodata_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    result_game: DataTypes.STRING,
    login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};