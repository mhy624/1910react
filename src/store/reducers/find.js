import { handleActions } from "redux-actions";

const defaultState = {
    name:"全国",
    TypeName:"全部分类",
    namas:"全部时间",
    typeLists:[],
}

export default handleActions({
    FIND_LIST:(state,action)=>{
        let typelist = JSON.parse(JSON.stringify(state))
        typelist.list=action.payload.data.fcitys
        typelist.typeLists=action.payload.data.pagerMemoryList
        return typelist
    },
}, defaultState)