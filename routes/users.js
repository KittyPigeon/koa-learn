const router = require('koa-router')()
const UserController = require('../controllers/user')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
router.get('/loginForm',async function(ctx,next){
  await ctx.render('form',{
    title:'登录'
  })
})
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get(
  '/getUserDetail/:id',
  UserController.detail
)
router.get('/userList',UserController.list);
router.post('/login',function(ctx,next){
  ctx.body='登录';
})
module.exports = router
