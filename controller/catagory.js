const {Router} = require('express');
const router = Router();
const catagoryModel = require('../model/catagory')
router.post('/catagory',async(req,res,next)=>{
    try {
             if (req.session.user) {
              const {name}=req.body
                const data = await catagoryModel.create({
                    name
                })
                // console.log(data)
                res.json({
                    code: 200,
                    data
                })
        }
        
    } catch (error) {
        next(error)
    }
})
// 获取全部分类
router.get('/catagory',(req,res)=>{
    catagoryModel.find().then(data=>{
        res.json({
            code:200,
            data
        })
    }).catch(error => {
        msg: error
    })
})
router.get('/catagory/:id', (req, res) => {
    let {
        id
    } = req.params
    catagoryModel.findById(id).then(data => {
        res.json({
            code: 200,
            data
        })
    }).catch(error => {
        msg: error
    })
})

module.exports = router