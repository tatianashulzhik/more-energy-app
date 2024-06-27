'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('body-indicators', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      weight: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      bloodFatPercentage: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      visceralFat: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      skeletalMuscleMass: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      bloodPressure: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      skeletalMuscleMass: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      heartRate: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      waistCircumference: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      hipCircumference: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      AGRatio: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      cholesterol: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      bloodSugarRatio: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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
    await queryInterface.dropTable('body-indicators');
  },
};
