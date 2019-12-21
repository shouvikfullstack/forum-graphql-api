"use strict";
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define(
    "Thread",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      channelID: {
        type: DataTypes.UUID,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM("UNSOLVED", "SOLVED"),
        allowNull: false,
        defaultValue: "UNSOLVED"
      },
      isLocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      lastRepliedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Thread.associate = function(models) {
    // associations can be defined here
    Thread.belongsTo(models.User)

    Thread.hasMany(models.Reply)

    Thread.belongsTo(models.Channel)
  };
  return Thread;
};
