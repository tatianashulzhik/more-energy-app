'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        AllowNull: true,
      },
      email: {
        AllowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      password: {
        AllowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      banned: {
        defaultValue: false,
        type: Sequelize.DataTypes.STRING,
      },
      banReason: {
        defaultValue: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
