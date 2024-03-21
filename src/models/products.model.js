'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            trim : true
        }

    },
    {
        collection : 'categories',
        timestamps : true
    }
)

const ProductSchema = new mongoose.Schema(
    {

        category : {
            type : mongoose.Schema.Types.ObjectId, // 
            ref : 'Category',
            required : true
        },
        title : {
            type : String,
            trim : true,
            required : true
        },
        description : {
            type : String,
            trim : true,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        discountPercentage : {
            type : Number,
            allownull : true
        },
        rating : {
            type : Number,
            required: false
        },
        stock : {
            type : Number,
            required: true
        },
        brand : {
            type : String,
            trim : true,
            required : true
        },
        thumbnail : {
            type : String,
            trim : true,
            required : false
        },
        images : {
            type : Array
        },
         
        
    },
    {
        collection: "products",
        timestamps: true
    }
)


module.exports = {
    Product : mongoose.model('Product',ProductSchema),
    Category : mongoose.model('Category',CategorySchema)
}