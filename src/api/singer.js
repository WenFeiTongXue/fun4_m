import axios from "axios"

export function getSingerList(){
  const url="/apis/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
  
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}