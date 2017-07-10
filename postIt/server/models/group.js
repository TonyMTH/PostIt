module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.SRING,
      allowNull: false,
    },
  }, {

    classMethods: {
      associate: (models) => {
        Group.hasMany(models.User, {
          foreignKey: 'group_id',
          as: 'Users',
        }),
        Group.hasMany(models.Messages, {
          foreignKey: 'group_id',
          as: 'Message',
        });
      },
    },

  });
  return Group;
};