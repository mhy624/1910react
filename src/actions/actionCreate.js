import {tickedApi , findApi} from "@api/mineApi"
import {createAction} from "redux-actions"
// 同步详情
export const TickedCon=createAction("TICKED_CON",(val)=>val)
// 异步详情

export const TickedAsyncAction=(url)=>{
    return async (dispatch) =>{
        let data= await tickedApi(url);
        dispatch(TickedCon(data.data))
    }
}

//  同步列表
export const findList=createAction("FIND_LIST",val=>val)
// 异步列表
export const findAsyncAction=()=>{
    return async (dispatch)=>{
        let date = await findApi()
        dispatch(findList(date));
    }
}



