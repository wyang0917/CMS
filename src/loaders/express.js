const express = require ('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const apiRouter = require('../routes/v1/api')

const limiter = rateLimit({
  windowMs:15 * 60 *1000,
  limit:100,
  standardHeaders:'draft-7',
  legacyHeaders:false,
})

exports.initExpress = ()=>{
  // init express server
  // security: cors
  // convert format to json
  // security: limit how many times a IP can call us
  // return app

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(limiter)
  // import the routes so express app connect with router
  app.use('/api/v1',apiRouter)
  return app
}