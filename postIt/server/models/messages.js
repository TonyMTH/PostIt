module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    userDetail_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Messages;
};