"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const User = require('../controllers/user.controller');



router.route('/')
    .get(User.list)
    .post(User.create)



router.route('/:id')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)



module.exports = router