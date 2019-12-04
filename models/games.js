module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('games', {

        name: {

            type: DataTypes.STRING
            
           
        },
        genre:{
            type: DataTypes.STRING
           
            
        },
        year: {
            type: DataTypes.INTEGER
            
        },
        publisher: {
            type: DataTypes.STRING
            

        }
    })
    return Games;
}