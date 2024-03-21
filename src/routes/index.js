'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const router = require('express').Router();

router.use('/auth',require('./auth.route.js'))

router.use('/token',require('./token.route.js'))

router.use('/product',require('./products.route'))

router.use('/category',require('./category.route'))

router.use('/user',require('./user.route'))


module.exports = router


