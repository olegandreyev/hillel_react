import { combineReducers } from "redux"
import { productReducer } from "../reducers/productsReducer"
import { uiReducer } from "../reducers/uiReducer"

export const rootReducer = combineReducers({
    products: productReducer,
    ui: uiReducer
    
})
