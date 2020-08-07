const { Sequelize, DataTypes, Model } = require("sequelize");
const program = require("@caporal/core");

const sequelize = new Sequelize("ut", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    activities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "todo", // We need to choose the model name
  }
);

(async () => {
  try {
    const users = await User.findAll();
  } catch (error) {
    console.log("connection error", error);
  }
})();
