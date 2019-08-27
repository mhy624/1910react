const defaultState = {
   flag:false,
   value:"",
   searchNum: [],
   value1:"",
   value2:"",
   city:false,
   classify:false,
   time:false
}

export default (state = defaultState, action) => {
    let searchNum = Object.assign({}, state)
    switch (action.type) {
        case "SEARCH_NUM":
            searchNum.flag = true
            return searchNum;
        case "SEARCH_INPUT":
            searchNum.value = action.value
            return searchNum;
        case "SET_INPUT":
            searchNum.value1 = action.value1
            return searchNum;
        case "RETURN_NUM":
            searchNum.flag = false;
            return searchNum;
        case "CLICK_NUM":
            searchNum.value2 =state.value1
            return searchNum;
        case "ONCLICKDOWN":
            searchNum.city =!searchNum.city
            searchNum.classify =false
            searchNum.time =false
            return searchNum;

        
    }
    return state;
}