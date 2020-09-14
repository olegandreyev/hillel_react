import { combineReducers } from "redux"
import { productReducer } from "../reducers/productsReducer"
import { uiReducer } from "../reducers/uiReducer"
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    products: productReducer,
    ui: uiReducer,
    form: formReducer
})
