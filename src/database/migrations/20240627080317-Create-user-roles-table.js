'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user-roles', {
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      roleId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user-roles');
  },
};
