    var user = require('../model/user');
    var express = require('express')
    var router = express.Router();
    //注册
    router.post('/user', async (req, res, next) => {
        try {
            const {
                email,
                username,
                password
            } = req.body;

            let avatarnumber = Math.ceil(Math.random()*9);
            let avatar = `http://pbl.yaojunrong.com/avatar${avatarnumber}.jpg`
            //  console.log(data)
            if (password && password.length >= 5) {
                const data = await user.create({
                    email,
                    username,
                    password,
                    avatar
                })
                res.json({
                    code: 200,
                    msg: '注册成功',

                })
            } else {
                throw ("请输入合法的密码")

            }

        } catch (err) {
            res.json({
                code: 400,
                msg: '请输入合法的邮箱和密码',
                err
            })
        }
    })
    //登录
    router.post('/login', async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;
            const userData = await user.findOne({email});
            console.log(userData)
            if(!userData){
                res.json({
                    code:400,
                    msg:'用户不存在'
                })
            }else{
                
                if (password && userData.password == password) { 
                        req.session.user = userData
                        console.log(userData);
                        res.json({
                            code: 200,
                            msg: '登录成功',
                            userData: {
                                   username: userData.username,
                                    email: userData.email,
                                    avatar: userData.avatar,
                                    desc: userData.desc
                            } 
                        })
                    } else{
                        res.json({
                            code: 400,
                            msg: '密码不正确'
                        })
                    }
            }
        } catch (error) {
            res.json({
                code: 400,
                msg: error,
                
            })
        }
    })
    //logout
    router.get('/logout',(req,res)=>{
          if (req.session.user) {
           req.session.user = null;
           res.json({
               code:200,
               msg:'退出成功'
           })
          }else{
              res.json({
                  code:403,
                  msg:'登录失效'
              })
          }
    })
    module.exports = router