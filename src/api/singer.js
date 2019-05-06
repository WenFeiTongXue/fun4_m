import axios from "axios"

export function getSingerList(){
  const url="/apis/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
  
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}

export function getSingerSongs(mid){
  const url="/apis/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid="+mid+"&order=listen&begin=0&num=50&songstatus=1"
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}