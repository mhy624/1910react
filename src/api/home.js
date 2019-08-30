import http from "@utils/http";
//首页
export const home_api=(cityId)=>http.get("/server/content/city/"+cityId+".json")
//城市
export const city_api=()=>http.get("/server/content/city/list.json")

//   /server/content/city/bj.json
//场馆
export const venue_api=()=>http.get("/theatre/index/getTheatreList?page=1&version=6.0.4&referer=2")
//谢春花
export const campaign_api=()=>http.get("/server/subject/detail-xiechunhua0621.json")
//m.228.cn/server/subject/detail-mowenwei0522.json
//export const detail_api=()=>http.get("/theatre/index/getTheatreList?page=1&version=6.0.4&referer=2")
//https://m.228.cn/server/subject/list.json
//活动列表
export const subject_api=(num,shu)=>http.get("/server/subject/"+num+".json")
//m.228.cn/server/subject/detail-ertong0820.json
//活动详情
export const detail_M_api=(url)=>http.get(url)
//https://m.228.cn/server/subject/more.json?pageNum=2
