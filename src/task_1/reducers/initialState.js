import { products } from '../data/arrays'

export const initialState = {
    products: {
        productList: [...products],
        newProduct: {
            name: '',
            category: '',
            price: '',
            residue: '',
            isEdit: true
        },
        product: {}
    },
    ui: {
        isCreateFormHidden: false,
    }
}