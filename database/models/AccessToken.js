"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AccessToken extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AccessToken.init(
        {
            tokenable_type: DataTypes.STRING,
            tokenable_id: DataTypes.BIGINT.UNSIGNED,
            name: DataTypes.STRING,
            token: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "AccessToken",
            underscored: true,
        }
    );
    return AccessToken;
};
