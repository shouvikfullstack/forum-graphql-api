'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {});
  Thread.associate = function(models) {
    // associations can be defined here
  };
  return Thread;
};