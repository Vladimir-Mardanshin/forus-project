var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var User = db.user;
var Order = db.order;
var Space = db.space;
var Equipment = db.equipment;

//запись, создаваемая заказчиком.
exports.createOrder = (req, res) => {
    Order.create({
        user_id: req.body.user_id,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        status: 'На рассмотрении',
        description: req.body.description,
        count: req.body.count,
        space_id: req.body.space_id
    })
    .then(order => {
        var result = {
            message: "Заяка yспешно создана",
            order: order 
        };
        res.status(201).json(result);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Ошибка создания заявки" });
    });
};

//запись, которая отправляется заказчику
exports.inviteAndCreateOrder = (req, res) => {
    const { executor_user_id, start_date, end_date, description, count, space_id } = req.body;

    Order.create({
        user_id: executor_user_id, 
        start_date,
        end_date,
        status: 'На рассмотрении', 
        description,
        count,
        space_id
    })
    .then(order => {
        var result = {
            message: "Заявка создана и исполнитель приглашен",
            order: order 
        };
        res.status(201).json(result);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Ошибка создания заявки с приглашением исполнителя" });
    });
};


//вывод записей, связанных с определенным пользователем
exports.getOrdersByUserId = async (req, res) => {
    const user_id = req.params.user_id;
    try {     
        const orders = await Order.findAll({
            where: { user_id },
            include: [
                { model: Space }, 
                { model: Equipment } 
            ]
        });

        res.status(200).json({ orders });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ошибка получения записей" });
    }
};
  
//Из запроса выше видно, что записи из таблицы Order видны тем
//кто с ними связан.
//в запросе ниже при нажатии отклонить меняется только 'Статус'
//обязательно должен передаваться ID заказа
exports.rejectOrder = async (req, res) => {
    const orderId = req.params.orderId;

    try {
        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        await order.update({ status: 'Отклонено' });

        res.status(200).json({ message: "Заявки выведены успешно", order });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Ошибка вывода заявок" });
    }
};  
  