var mongoose = require('mongoose')
// 创建一个骨架

var Schema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
// 初始化一个模型
const catagory = mongoose.model('catagory', Schema, 'catagories');
module.exports = catagory