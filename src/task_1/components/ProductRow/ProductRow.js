import React from 'react'

import { StyledTableCell, StyledTableRow } from '../myComponents'
import { Button } from '@material-ui/core'

const ProductRow = (props) => {

    const { name, category, price, residue, id } = props.product

    const { removedProduct } = props

    return (
        <StyledTableRow>
            <StyledTableCell align="center"> {name}</StyledTableCell>
            <StyledTableCell align="center">{category}</StyledTableCell>
            <StyledTableCell align="center">{price}</StyledTableCell>
            <StyledTableCell align="center">{residue}</StyledTableCell>
            <StyledTableCell align="center">
                <Button variant="contained" color="primary" align="center" onClick={removedProduct.bind(null, id)}>
                    Delete
                        </Button>
            </StyledTableCell>
        </StyledTableRow >
    )

}

export default ProductRow