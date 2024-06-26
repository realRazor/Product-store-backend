"use strict"
/* -------------------------------------------------------
    EXPRESS - User API
------------------------------------------------------- */

const User = require('../models/user.model')
const Token = require('../models/token.model')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    // LOGIN & LOGOUT

    login: async (req, res) => {

        const { email, password } = req.body

        if (email && password) {

            //? findOne, passwordu modeldeki set metodundaki encrypt i kullanarak db'de filtreleme yapar
            const user = await User.findOne({ email, password })
            if (user) {/*&& user.isActive*/

                /* SESSION *
                
                // Set Session:
                req.session = {
                    id: user._id,
                    password: user.password
                }
                // Set Cookie:
                if (req.body?.rememberMe) {
                    req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
                }

                /* SESSION */

                /* TOKEN */

                // Token var mı?
                let tokenData = await Token.findOne({ userId: user._id })

                // Eğer token yoksa oluştur:
                if (!tokenData) {
                    const tokenKey = passwordEncrypt(user._id + Date.now())
                    // console.log(typeof tokenKey, tokenKey)
                    tokenData = await Token.create({ userId: user._id, token: tokenKey })
                }
                
                /* TOKEN */

                res.status(200).send({
                    error: false,
                    token: tokenData.token,
                    user
                })

            } else {
                res.errorStatusCode = 401
                throw new Error('Wrong Email or Password.')
            }
        } else {
            res.errorStatusCode = 401
            throw new Error('Please enter Email and password.')
        }
    },

    logout: async (req, res) => {
        /* SESSION */
        // Set session to null:
        req.session = null
        /* SESSION */

        /* TOKEN */

        //* 1. Yöntem (Kısa yöntem)
        //? Her kullanıcı için sadece 1 adet token var ise (tüm cihazlardan çıkış yap):

        // console.log(req.user)
        // const deleted = await Token.deleteOne({ userId: req.user._id })

        //* 2. Yöntem:
        //? Her kullanıcı için 1'den fazla token var ise (çoklu cihaz):

        const auth = req.headers?.authorization || null // Token ...tokenKey...
        const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']
        console.log(tokenKey)
        let deleted = null;
        if (tokenKey && tokenKey[0]=='Token') {
            deleted = await Token.deleteOne({ token: tokenKey[1] })
        }

        /* TOKEN */

        res.status(200).send({
            error: false,
            message: 'Logout: Token Deleted.',
            deleted
        })
    },
}