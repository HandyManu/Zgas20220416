import express from 'express';
import salesControllers from '../controllers/salesController.js';

const router = express.Router();

router.route('/')
    .get(salesControllers.getAllSales)
    .post(salesControllers.insertSales);

router.route('/getSalesByCategory').get(salesControllers.getSalesByCategory);
router.route('/getMostSaledProducts').get(salesControllers.getMostSaledProducts);
router.route('/TotalEarnings').get(salesControllers.TotalEarnings);

export default router;