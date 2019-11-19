module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('games', {
    
        name: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
            
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        publisher: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    })
    return Games;
}