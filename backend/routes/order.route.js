import { Router } from 'express';

import * as orderController from '../controllers/order.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/getOrders')
    .get(orderController.getOrders);

router.route('/getOrderDetailsByOrderId/:orderId')
    .get(orderController.getOrderDetailsByOrderId);

export default router;
