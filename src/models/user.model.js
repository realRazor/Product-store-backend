'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const {mongoose} = require('../configs/db')

const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            trim : true,
            unique : true,
            required : [true,'Email must be required'],
            validate : [
                (email) => (email.includes('@') && email.includes('.')),
                'Email type is incorrect'
            ]         
        },
        password : {
            type: String,
            trim: true, 
            required: true,
            set: (password) => passwordEncrypt(password)
        }

    }
    ,
    {
        collection : 'users',
        timestamps : true
    }
)

module.exports = mongoose.model('User',UserSchema)
