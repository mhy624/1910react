import http from "@utils/http.js";
// 城市分类口
export const findApi=()=>http.get("/server/category/default.json")

// 详情页接口
export const tickedApi=(url)=>http.get(url)



