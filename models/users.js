module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  // joining user with groups tables
  User.associate = function(models) {
    User.belongsToMany(models.Group, { through: "SantaGroup" });
  };
  return User;
};
