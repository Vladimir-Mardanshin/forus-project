module.exports = (sequelize, Sequelize) => {
    var Order = sequelize.define(
        'order',
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
            start_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: true
            },
            status: {
                type: Sequelize.ENUM,
                values: ['На рассмотрении', 'Принято', 'Завершено', 'Отклонено'],
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            count: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            space_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }
        });

    Order.associate = (models) => {
        Order.belongsTo(models.user, {
            foreignKey: 'user_id',
        });
        Order.belongsTo(models.space, {
            foreignKey: 'space_id',
        });
    };
    return Order;
};