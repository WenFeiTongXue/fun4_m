//创建服务器
const express=require("express");
const server=express();
var cors = require('cors'); 
server.listen(3000);
console.log("运行中...")
//引入body-parser模块并设置
const bodyParser=require("body-parser");
server.use(bodyParser.urlencoded({
  extended:false
}))
// 挂载静态资源
server.use(express.static("./public"))
//引入路由器并挂载至特定路径
const apiRouter=express.Router()
server.use(cors({
  "origin":"*"
})); 
const axios=require("axios")
apiRouter.get("/test",(req,res)=>{
})
server.use("/api",apiRouter);