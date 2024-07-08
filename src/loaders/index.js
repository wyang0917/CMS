const expressApp = require ('./express')
const mongooseLoader = require('./mongoose')
const config = require('../config/app')

const initApp = ()=>{
  const express = expressApp.initExpress()
  express.listen(config.appConfig.port,()=>{
    console.log('Server is running');
  }).on('error',(e)=>{
    console.log(e);
  })
  // const dbConnection = mongooseLoader
  const dbConnection = mongooseLoader.init()
  return {express,dbConnection}
}

const {express,dbConnection} = initApp()

exports.express = express
exports.dbConnection = dbConnection