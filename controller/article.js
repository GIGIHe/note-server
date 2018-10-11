 var article = require('../model/article');
var catagory = require('../model/catagory')
 var express = require('express')
 var router = express.Router();
 
 router.post('/article',async(req,res,next)=>{
  try {
    //   判断是否登录
    if (req.session.user){
        const {
            content,
            contentText,
            title,
            catagory
        } = req.body
         const data = await article.create({
             content,
             contentText,
             title,
             catagory,
             author: req.session.user._id
         })
         res.json({
             code:200,
             msg:'发表成功',
             data       
         })
    }else{
        res.json({
            // forbidden
            code:403,
            msg:'未登录'
        })
    }
  } catch (error) {
      next(error)
  }
 })
 router.get('/article',(req,res)=>{
     let {pn=1,size=10}=req.query;
     pn = parseInt(pn);
     size = parseInt(size);
     article.find()
     .skip((pn - 1) * size)
     .limit(size).sort({_id:-1})
     .populate({
         path: 'author',
        select: '-password -email'
     }).populate({
             path: 'catagory'
         }).then(data => {
         res.json({
             code:200,
             data
         })
     })
 })
 // 获取文章详情
//  router.get('/article/:id', (req, res) => {
//      let {
//          id
//      } = req.params
//      article.findById(id).populate({
//              path: 'author',
//              select: '-password -email'
//          }).populate({
//              path: 'catagory'
//          }).then(data => {
//          res.json({
//              code: 200,
//              data
//          })
//      }).catch(error => {
//          msg: error
//      })
//  })
module.exports = router;