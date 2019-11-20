require('dotenv').config();
//Express
const express = require('express');
const app =express();
// Import Controller
const user = require('./controllers/userController');
const games = require('./controllers/gamesController');//main list of games
const favGames = require('./controllers/favGamesController');//favorites added by users
//Database
const sequelize = require('./db');
sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
//Routes
app.use('/auth', user);
app.use('/games', games) //all games
app.use('/fav', favGames)//all favGames
app.use(require('./middleware/validate-session'));
//App Listen
app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));//port is 3000

