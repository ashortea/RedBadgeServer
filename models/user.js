module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
    
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        role: {
            type: DataTypes.ENUM(user[0], admin[1], disabled[2]),
            allowNull:false
        }
    })
    return User;
}