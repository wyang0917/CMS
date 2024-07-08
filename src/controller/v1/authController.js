const authService = require('../../services/v1/authServices')

exports.register = async(req,res)=>{
  res.send(await authService.createUser(req.body))
}

exports.login = async(req,res)=>{
  res.send(await authService.login(req.body))
}

exports.logout = async(req,res)=>{
  res.send(await authService.logout(req.headers.authorization))
}