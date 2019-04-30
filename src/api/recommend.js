import jsonp from "../common/js/jsonp"
import axios from "axios"
import {commonParams,options} from "./config"

export function getRecommend(){
  const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?"
  
  const data = Object.assign({},commonParams,{
    platform:"h5",
    uin:0,
    needNewCode:1
  })
  return jsonp(url,data,options)
}

export function getDiscList(){
  const data=Object.assign({},commonParams,{
    platform:"h5",
    uin:0,
    needNewCode:1,
    _: 1513317614040
  })
  return jsonp("/apis/splcloud/fcgi-bin/gethotkey.fcg?",data,options)
}