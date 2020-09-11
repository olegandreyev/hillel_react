import { products } from '../data/arrays'

export const initialState = {
    products: {
        productList: [...products],
        newProduct: {
            name: '',
            category: '',
            price: '',
            residue: ''
        }
    },
    ui: {
        isCreateFormHidden: false
    }
}