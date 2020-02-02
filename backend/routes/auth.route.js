import { Router } from 'express';

import * as AuthController from '../controllers/auth.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/login')
    .post(AuthController.login);

export default router;
