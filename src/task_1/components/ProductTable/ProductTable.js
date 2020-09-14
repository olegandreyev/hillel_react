import React from 'react'
import ProductRow from '../ProductRow/ProductRow'

import { TableBody } from '@material-ui/core'
import { connect } from 'react-redux'


const ProductTable = ({productsList}) => {


    return (
        < TableBody >
            {
                productsList.map(item => <ProductRow key={item.id} product={item}/>)
            }
        </TableBody>
    )

}

const mapStateToProps = state => {
    return {
        productsList: state.products.productList
    }
}


export default connect(mapStateToProps)(ProductTable)