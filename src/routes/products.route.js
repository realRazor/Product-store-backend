'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const router=require("express").Router()

const { Product } = require("../controllers/products.controller")
// Product Routes:
router.route('/')
    .get(Product.list)
    .post(Product.create)
router.route('/:id')
    .get(Product.read)
    .put(Product.update) // put patch aynı
    .patch(Product.update)
    .delete(Product.delete)


module.exports = router