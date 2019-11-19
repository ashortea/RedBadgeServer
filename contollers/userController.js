const router = require('express').Router();
const User = require('../db').import('../models/user');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//signup
router.post('/signup', (req, res) => {
    const newUser = req.body.user
    User.create({
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 10),
        role: newUser.role
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {
                expiresIn: 60*60*24
            })
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
})

//signin
router.post('/signin', (req, res) => {
    db.users.findOne ({
        where: {
            userName: loginUser.userName
        }
    })
    .then (user => {
        if(user){
            bcrypt.compare(loginUser.password, user.password, (err, matches) => {
                if(matches) {
                    let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {
                        expireIn: 60*60*24
                    })
                    res.json({
                        user: user,
                        message: 'successfully authenticated user',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({ error: 'bad gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'failed to authenticate'})
        }
    }, err => res.status(501).send ({error: 'failed to process'}))
})

//get
// router.get('/users', (req, res) => {
//     db.user.findAll ({
//         include: [
//             {
//                 model: db.posts,
//                 include: [
//                     {
//                         model: db.comments
//                     }
//                 ]
//             }
//         ]
//     }).then(users => {
//         const resObj = users.map(user => {

//             return Object.assign(
//                 {},
//                 {
//                     user_id: user.id,
//                     username: user.username,
//                     role: user.role,
//                     posts: user.posts.map(post => {

//                         return Object.assign(
//                             {},
//                             {
//                                 comment_id: comment.id,
//                                 post_id: comment.post_id,
//                                 commenter: comment.commenter_username,
//                                 commenter_email: comment.commenter_email,
//                                 content: comment.content
//                             }
//                         )
//                     })
//                 }
//             )
//         })
//         res.json(resObj)
//     })
// })




module.exports = router;