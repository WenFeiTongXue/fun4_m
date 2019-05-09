import axios from "axios"
export function getVkey(mid){
  // const url="/apis/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&uin=0&songmid="+mid+"&filename=C400"+mid+".m4a&guid=3655047200"
  const url="./apis/base/fcgi-bin/fcg_music_express_mobile3.fcg"
const params={
        g_tk:195219765,
        loginUin:1297716249, //可以传空值
        hostUin:0,
        format:'json',
        inCharset:'utf8',
        outCharset:'utf-8',
        notice:0,
        platform:'yqq',
        needNewCode:0,
        cid:205361747,
        uin:1297716249, //可以传空值
        songmid:mid,
        filename:'C400'+mid+'.m4a',
        guid:7332953645
      }
  
  return axios.get(url,{params}).then(res=>{
    return Promise.resolve(res.data)
  })
}

export function getLrc(mid){
  const url="https://v1.itooi.cn/tencent/lrc?id="+mid
  return axios.get(url).then(res=>{
    // console.log(res.data)
    return Promise.resolve(res.data)
  })
}