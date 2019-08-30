import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import week from "./reducers/week_choice"
import city from "./reducers/city"
import search from "./reducers/search"
import mhy from "./reducers/mhy"
import ticked from "./reducers/ticked"
import find from "./reducers/find"
const reducer = combineReducers({
    week,
    city,
    search,
    mhy,
    ticked,
    find
    
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;