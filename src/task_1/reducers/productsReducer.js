import { initialState } from './initialState'

export const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM': {
            return {
                productList: [...state.productList.filter(product => product.id !== action.payload)]
            }
        }
        case 'ADD_ITEM': {
            return {
                ...state,
                productList: [...state.productList, action.item],
                

            }
        }
        case 'HANDLE_INPUT_CHANGE': {
            return {
                ...state, newProduct: {
                    ...state.newProduct, ...action.payload
                }
            }
        }
        default: return state
    }
}