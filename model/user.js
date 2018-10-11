var mongoose = require('mongoose')
// 创建一个骨架
var Schema = new mongoose.Schema({
    username:String,
    avatar: String,
    desc:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password: String

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
// 初始化一个模型
const user = mongoose.model('user', Schema,'user');
module.exports = user