const Router =require('koa-router');

const router =new Router({prefix:'/user'});

router.get('/',async(ctx) =>{
    ctx='user';
})
module.exports=router;