require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const { Sequelize } = require('sequelize');
const FavoriteModel=require('./models/FavoriteModel');
const UserModel=require('./models/UserModel');


const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   
   { logging: false, native: false }
);


FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through:'user_favorite'});
Favorite.belongsToMany(User, {through:'user_favorite'})

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
