import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

import { TableBody } from '@material-ui/core'


const ProductTable = props => {
    const { products, removedProduct } = props

    return (
        < TableBody >
            {
                products.map(product => <ProductRow key={product} product={product} removedProduct={removedProduct} />)
            }
        </TableBody>
    )

}

export default ProductTable