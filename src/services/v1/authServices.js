const User = require('../../model/user')

exports.createUser = async(data)=>{
  const result = await new User(data)
  result.save()
  return result
}

exports.login = async(data)=>{
  
}

exports.logout = async(data)=>{
  
}

