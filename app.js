
require('dotenv').config();
//Express
const express = require('express');
const trails =express();
// Import Controller
const user = require('./controllers/userController');
const games = require('./controllers/gamesController');
const favGames = require('./controllers/favGamesController');
//Database
const sequelize = require('./db');
sequelize.sync();
app.use(require('./middleware/headers'));
app.use(express.json());
//Routes
app.use('/auth', user);
app.use('/games', games) //all games
app.use(require('./middleware/validatesession'));
//App Listen
app.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));
