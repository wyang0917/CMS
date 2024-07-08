const mongoose = require ('mongoose')

const articleSchema = new mongoose.Schema({
  title:{
    type: String,
    index:true   //improve searching performance
  },
  content:{
    type: String,
  },
  comments:[
    {
      type: String,
    },
],
  status:{
    type: String
  },
  author:{
    type:String
  },
  likedBy:[
    {
      type:String,
    },
  ] //Need to be like this
})
const Article = mongoose.model('Article',articleSchema)
module.exports = Article