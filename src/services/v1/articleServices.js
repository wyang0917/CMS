const Article = require('../../model/article')

exports.getAllArticles = async(req,res)=>{
 return await Article.find()
}

exports.getArticle=async(id)=>{
  const result = await Article.findById(id)
  console.log(result);
  return result
}
exports.updateArticle=async(id,data)=>{
  const result = await Article.findByIdAndUpdate(id,data,{new:"true"})
  result.save()
  return result
}
exports.createArticle=async(data)=>{
  const result = await new Article(data)
  result.save()
  return result
}
exports.destroyArticle=async(id)=>{
  const result = await Article.findByIdAndDelete(id)
  console.log('delete succeed:',result);
  return 'delete succeed'
}

