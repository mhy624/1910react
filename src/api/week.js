import http from "@utils/http";

//week_choice
export const week_choice = (city_id=140,page=0)=>http.get("/hub/home/v1/web/week_choice.json",{city_id,page}) 
//搜索a
export const search_Num = (Num)=>http.get("/server/search/s/"+Num+".json") 
//城市列表
export const CityName_Num = ()=>http.get("/server/search/s/11.json") 
