module.exports = (sequelize, DataTypes) => {
  const UserDetail = sequelize.define('UserDetail', {
    surname: DataTypes.TEXT,
    firstName: DataTypes.TEXT,
    email: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate: (models) => {
        Group.hasMany(models.User, {
          foreignKey: 'UserDetail_id',
          as: 'Users',
        }),
        Group.hasMany(models.Messages, {
          foreignKey: 'UserDetail_id',
          as: 'Message',
        });
      },
    },
  });
  return UserDetail;
};