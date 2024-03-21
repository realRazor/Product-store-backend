'use strict'
/* -------------------------------------------------- */
/*                 CLARUS-STORE API                   */
/* -------------------------------------------------- */

const express = require('express');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST;


const { connectDB } = require('./src/configs/db');
connectDB()

// to get data from body (body-parser)
app.use(express.json());


//Session-Cookie
const session = require('cookie-session')({secret : process.env.SECRET_KEY});
app.use(require('./src/middlewares/queryHandler'))

app.use(require('./src/middlewares/authentication'))
// app.use(require('./src/middlewares/get.cors'))
// app.use(require('./src/middlewares/post.cors'))
//Routes

app.all('/',(req,res)=>{
    res.send({
        error : false,
        message: 'Welcome to Clarus-Store-App',
        user : req.user || "User data couldn't found"
    })
})



// Main Router
app.use(require('./src/routes'))


// Error Handler : 
app.use(require('./src/errorHandler'))
app.listen(PORT,()=>{console.log(`Server running on http://${HOST}:${PORT}`)})
//require('./src/helpers/sync')()
