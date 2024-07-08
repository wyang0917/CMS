// module.exports = function(){
//   return null
// }

const url = 'mongodb+srv://yangwang0917:wsYDx1KBc3UGMJ6U@cluster0.hrgk5is.mongodb.net/';
const mongoose = require('mongoose');
exports.init = () => {
  return mongoose.connect(url).then(() => console.log('Connected!'));
}