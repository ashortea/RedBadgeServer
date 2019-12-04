module.exports = (sequelize, DataTypes) => {
    const FavGames = sequelize.define('favGame', {
        name: {
            type: DataTypes.STRING
            
        },
        genre: {
            type: DataTypes.STRING
            
        },
        year:{
            type: DataTypes.INTEGER
           
            },
        publisher: {

            type: DataTypes.STRING
            

        },
    
        owner:{
            type: DataTypes.INTEGER,
            
           
        }
      
    })

    return FavGames;
}