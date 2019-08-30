import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import mhy from "./reducers/mhy"

const reducer = combineReducers({
    mhy
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;