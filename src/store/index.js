import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
<<<<<<< HEAD
import week from "./reducers/week_choice"
import city from "./reducers/city"
import search from "./reducers/search"
const reducer = combineReducers({
    week,
    city,
    search
=======
import mhy from "./reducers/mhy"

const reducer = combineReducers({
    mhy
>>>>>>> mhy
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;