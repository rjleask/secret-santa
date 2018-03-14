module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  // joining user with settings table with a hasone relationship
  Group.associate = function(models) {
    Group.belongsToMany(models.User, { through: "SantaGroup" });
  };
  return Group;
};
