module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userDetail_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'userDetail',
          key: 'id',
          as: 'userDetail_id',
        },
      },
      group_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Group',
          key: 'id',
          as: 'group_id',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
};