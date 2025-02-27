const express = require("express");
const router = express.Router();
const {updateStock,deleteStock,getStock} = require("../controllers/stockProduct");

// Get a stock available product
router.get("/getStock",getStock);

// Update a stock available product by id
router.put("/:id",updateStock); 

// Delete a stock available product by id
router.delete("/:id",deleteStock); 


module.exports = router;