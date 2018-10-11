var mongoose = require('mongoose')
var Schema = mongoose.Schema;
// 创建一个骨架
var Schema_ = new mongoose.Schema({
   content: String,
   contentText: String,
   title: String,
   catagory: {
       type:Schema.Types.ObjectId,
       ref:'catagory'
   },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    readNum:{
        type:String,
        default:0
    },
    commentNum:{
        type:String,
        default:0
    }
  
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    
})
// 初始化一个模型
const article = mongoose.model('article', Schema_, "article");
module.exports = article