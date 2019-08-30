const defaultState = {
   flag:false,
   value:"",
   searchNum: [],
   value1:"",
   value2:"",
   value3:"",
   city:false,
   classify:false,
   time:false,
   ticket:"",
   value4:{}
}

export default (state = defaultState, action) => {
    let searchNum = Object.assign({}, state)
    switch (action.type) {
        case "SEARCH_NUM":
            searchNum.flag = true
            return searchNum;

            //刚开始页面的input
        case "SEARCH_INPUT":
            searchNum.value = action.value
            searchNum.value2 = action.value
            return searchNum;

            
        case "SET_INPUT":
            searchNum.value1 = action.value1
            return searchNum;

        case "RETURN_NUM":
            searchNum.flag = false;
            return searchNum;


        case "CLICK_NUM":
            searchNum.value3=state.value2
            return searchNum;

           


        case "ONCLICKDOWN":
            switch (action.stutes) {
                case 1:
                    searchNum.city =!searchNum.city
                    searchNum.classify =false
                    searchNum.time =false
                    return searchNum;
                    case 2:
                    searchNum.city =false
                    searchNum.classify =!searchNum.classify
                    searchNum.time =false
                    return searchNum;
                    case 3:
                    searchNum.city =false
                    searchNum.classify =false
                    searchNum.time =!searchNum.time
                    return searchNum;
            }
            
        //点击城市城市列表消失
        case "CLICK_CITYNAME":
            searchNum.city =false
            return searchNum;

        case "TARGET_INPUT":
            searchNum.value2 = action.searchinput
            return searchNum;

        //点击进入详情
        case "handlesearchcity":
            searchNum.ticket =action.ticket
            return searchNum;
      
            case "handleOnchange":
                searchNum.value2 =action.handleOnchange
                return searchNum;    
    }
    return state;
}