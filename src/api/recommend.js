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
  // const data=Object.assign({},commonParams,{
  //   platform:"h5",
  //   uin:0,
  //   needNewCode:1,
  //   _: 1513317614040
  // })
  // return jsonp("/apis/splcloud/fcgi-bin/gethotkey.fcg?",data,options)
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get("./apis/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg", {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
    // console.log(res)
  })
}

export function getSongs(mid){
  const url="./apis/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid="+mid+"&format=json&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
    // console.log(res)
  })
}