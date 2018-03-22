module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    googleId: {
      type: DataTypes.STRING
    },
    userCookie: {
      type: DataTypes.STRING
    }
  });
  // joining user with groups tables
  User.associate = function(models) {
    User.belongsToMany(models.Group, { through: "SantaGroup" });
  };
  return User;
};
