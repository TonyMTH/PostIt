module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
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
          model: 'UserDetail',
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
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Messages'),
};