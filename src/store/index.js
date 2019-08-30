import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import ticked from "./reducers/ticked"
import find from "./reducers/find"
const reducer = combineReducers({
    week,
    ticked,
    find
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;