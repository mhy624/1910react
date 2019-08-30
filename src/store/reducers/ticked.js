import {handleActions} from "redux-actions";

const defaultState = {
    tickedList:{},
}

export default handleActions({
    TICKED_CON:(state,action)=>{
        let tickedAction=JSON.parse(JSON.stringify(state))
            tickedAction.tickedList=action.payload.product
        return tickedAction;
    }
},defaultState)