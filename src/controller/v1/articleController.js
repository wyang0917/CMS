const articleServices = require('../../services/v1/articleServices')

exports.index = async(req,res)=>{
  res.send( await articleServices.getAllArticles())
}

exports.show = async(req,res)=>{
  res.send(await articleServices.getArticle(req.params.id))
}
exports.update = async(req,res)=>{
  res.send(await articleServices.updateArticle(req.params.id,req.body))
}
exports.store = async(req,res)=>{
  res.send(await articleServices.createArticle(req.body))
}
exports.destroy =async(req,res)=>{
  res.send(await articleServices.destroyArticle(req.params.id))
}