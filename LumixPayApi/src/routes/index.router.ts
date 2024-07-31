import express, { Router } from 'express';
import paymentRouter from './payment.route';

const router: Router = Router();

router.use('/payment', paymentRouter);

export default router;