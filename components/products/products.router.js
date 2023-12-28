// @ts-check
const express = require('express');
const router = express.Router();
const validateToken = require('../../middlewares/validate-token');
const controller = require('./products.controller');

router.route('/products/list')
  .get(
    validateToken(),
    (req, res) => {
      controller.listProducts()
        .then(data => {
          res.status(200).json({
            success: true,
            message: "Products",
            ...data
          })
        })
        .catch((error) => {
          res.status(500).json({
            success: false,
            message: "Products fetch failed",
            error: error.message || 'Unexpected error while fetching products. Please contact support.',
          })
        })
    });

module.exports = router;