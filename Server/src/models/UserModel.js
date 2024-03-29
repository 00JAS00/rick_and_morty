const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true
      },
      name:{
         type:DataTypes.STRING,
         allowNull:false
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail:true
      },
      password:{
         type:DataTypes.STRING,
         allowNull:false
      },
      status:{
         type:DataTypes.BOOLEAN,
         defaultValue:false
      }
   }, 
   { timestamps: false });
};
