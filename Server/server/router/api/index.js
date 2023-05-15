const router = require('express').Router();
const userRouter=require('./user');
const loginRouter=require('./login');

const defaultRouters=[
  {
    path: '/register',
    route: userRouter
  },{
    path: '/login',
    route: loginRouter
  }
];
defaultRouters.forEach((route)=>{
  router.use(route.path,route.route);
})

module.exports = router;
