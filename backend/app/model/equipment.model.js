module.exports = (sequelize, Sequelize) => {
    var Equipment = sequelize.define(
        'equipment',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            space_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            count: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }
        });

    Equipment.associate = (models) => {
        Equipment.belongsTo(models.space, {
            foreignKey: 'space_id'
        });
    };
    return Equipment;
};