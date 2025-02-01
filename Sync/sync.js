const sequelize = require('../Db');
const User = require('../Models/usermodel');


const syncDatabase = async () => {
    try {
      await sequelize.authenticate(); // Authenticate the connection
      console.log('Connection has been established successfully.');
  
      // Sync all models with the database
      await sequelize.sync({ alter: true }); 
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error.message);
    }
  };
  
  module.exports = syncDatabase;
  