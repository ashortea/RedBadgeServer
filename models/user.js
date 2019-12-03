module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
    
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        role: {
            type: DataTypes.ENUM,
            values:[ "user", "admin", "disabled"],
            // allowNull: true
        }
    })
    return User;
}