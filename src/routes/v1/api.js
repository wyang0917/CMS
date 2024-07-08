const express = require('express')
const router = new express.Router()
const articleController = require('../../controller/v1/articleController')
const authController =require('../../controller/v1/authController')

// get one article post put patch delete

// get all articles
router.get('/articles',articleController.index
)
//get one post    show 
router.get('/articles/:id',articleController.show)

//update post     update
router.put('/articles/:id',articleController.update)

//create post     store
router.post('/articles',articleController.store)

//delete post     destroy
router.delete('/articles/:id',articleController.destroy)


//user
router.post('/register',authController.register)

router.post('/login',authController.login)

router.post('/logout',authController.logout)


module.exports = router
