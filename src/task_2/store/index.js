import { combineReducers } from 'redux'
import { sliderReducer } from '../reducers/sliderReducer'

export const rootReducer = combineReducers({
    slider: sliderReducer
})