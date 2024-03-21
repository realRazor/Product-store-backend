'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const router=require("express").Router()

const { Category } = require("../controllers/products.controller")


router.route('/')
    .get(Category.list)
    .post(Category.create)
router.route('/:id')
    .get(Category.read)
    .put(Category.update) // put patch aynı
    .patch(Category.update)
    .delete(Category.delete)

module.exports = router