import axios from "axios"

export function getSearchList(kw){
  const url="./apis/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+kw+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=100&n=20&p=1&remoteplace=txt.mqq.all&_=1512564562121"
  return axios.get(url).then(res=>{
    return Promise.resolve(res.data)
  })
}