const express = require('express');
const router = express.Router();
const {veiwOrders,updateOrders,updateStatus,cancelOrder,deleteOrder} = require('../controllers/manageOrderController');

// Get all orders details
router.get('/',veiwOrders);

// Update Orders details by id
router.put('/:orderId',updateOrders);

// Delete Orders details by id
router.delete('/:orderId',deleteOrder)

// Update Orders status by id
router.put('/:orderId/status',updateStatus);

// Update cancel orders by id
router.put('/:orderId/cancel',cancelOrder);

module.exports = router;