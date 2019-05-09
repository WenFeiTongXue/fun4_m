import axios from "axios"

export function getRankList(){
  const url="/apis/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1512554796112"
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}
export function getRankSongs(mid){
  const url="/apis/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+mid+"&_=1512563984096"
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}