"use strict"
/* ====================================================== */
/*             CLARUS STORE APP CONTROLLERS               */
/* ====================================================== */

require("express-async-errors")

const {  Product , Category } = require("../models/products.model")

module.exports.Product = {
    list : async (req,res) =>{
        
        //const data = await Product.find()//.populate('blogCategoryId')
        const data = await res.getModelList(Product,'category')
        res.status(200).send({
            error: false,
            details : await res.getModelListDetails(Product),
            data: data
        })
    },
    create : async (req,res) =>{
     
        const data = await Product.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read : async (req,res) =>{
        const data = await Product.findOne({_id : req.params.id})

        res.status(200).send({
            error: false,
            message: "User found",
            data
        })
    },
    update : async (req,res) =>{

    },
    delete : async (req,res) =>{
        const data = await Product.deleteOne({_id: req.params.id})
        res.status(200).send({
            error: false,
            message: "The record deleted by user",
            data
        })
    }
}

module.exports.Category = {
    list : async (req,res) =>{
        
        const data = await Category.find()//.populate('blogCategoryId')
        //const data = await res.getModelList(BlogPost,'blogCategoryId')
        res.status(200).send({
            error: false,
            //details : await res.getModelListDetails(Product),
            data: data
        })
    },
    create : async (req,res) =>{
        const data = await Category.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read : async (req,res) =>{

    },
    update : async (req,res) =>{

    },
    delete : async (req,res) =>{
        //const data = await 
    }
}