module.exports = (sequelize, DataTypes) => {
    const FavGames = sequelize.define('favGame', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year:{
            type: DataTypes.INTEGER,
            allowNull:false
            },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Rank: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        owner:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
      
    })

    return FavGames;
}