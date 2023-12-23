module.exports = (sequelize, Sequelize) => {
    var User_img = sequelize.define(
        'user_img', // определяем имя таблицы
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER, // тип данных STRING (в MySQL — VARCHAR)
                allowNull: false
            },
            link: {
                type: Sequelize.STRING(200)
            },
            mime_type: {
                type: Sequelize.STRING(25)
            }
        });

    // Определяем связи таблицы abiturient с другими таблицами
    User_img.associate = (models) => {

        // Определение связи один-ко-многим с таблицей exam. Это определение связи с одной стороны.
        // Связь также определена со второй стороны (со стороны модели exam): в файле exam.model.js
        User_img.belongsTo(models.user, {
            foreignKey: 'user_id'
        });
    };
    return User_img;
};