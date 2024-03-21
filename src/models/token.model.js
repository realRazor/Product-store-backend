'use strict'
const { mongo } = require('mongoose');
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const { mongoose } = require('../configs/db');


const TokenSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true,
        unique : true
    },
    token : {
        type : String,
        trim : true,
        required : true,
        index : true,
        unique : true
    }
},{
    collection : 'tokens',
    timestamps : true
})

module.exports = mongoose.model('Token',TokenSchema)