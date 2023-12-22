module.exports = (sequelize, Sequelize) => {
    var Space = sequelize.define(
        'space',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            }
        });

    Space.associate = (models) => {
        Space.belongsTo(models.user, {
            foreignKey: 'user_id'
        });
        Space.hasMany(models.equipment, {
            foreignKey: 'space_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
        Space.hasMany(models.order, {
            foreignKey: 'space_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            sourceKey: 'id'
        });
    };
    return Space;
};