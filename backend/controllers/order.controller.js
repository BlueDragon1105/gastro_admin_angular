import connection from '../config/database';

export const getOrders = (req, res) => {
    console.log('connection,', connection);
    connection.query(`SELECT * FROM orders ORDER BY timestamp`, function (error, results) {
        res.send(results);
    });
};

export const getOrderDetailsByOrderId = (req, res) => {
    const orderId = req.params.orderId;
    connection.query(`select * from order_details where order_id=${orderId}`, function (error, results) {
        res.send(results[0]);
    });
};
