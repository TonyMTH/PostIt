module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    group_name: DataTypes.STRING,
    userDetail_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return User;
};