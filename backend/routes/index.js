import { Router } from 'express';

import testRoutes from './test.route';
import authRoutes from './auth.route';
import orderRoutes from './order.route';

const router = Router(); // eslint-disable-line new-cap

// public route
router.use('/test', testRoutes);
router.use('/auth', authRoutes);
router.use('/order', orderRoutes);

export default router;
