"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')

const connectDB = function() {
    // Connect:
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log('* DB Connection is Succesful * '))
        .catch((err) => console.log('- Failed connection! - ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    connectDB
} 