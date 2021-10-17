"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("access_tokens", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED,
            },
            tokenable_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tokenable_id: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
            },
            token: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("access_tokens");
    },
};
