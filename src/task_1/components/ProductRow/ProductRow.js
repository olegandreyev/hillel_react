import React from 'react'

import { StyledTableCell, StyledTableRow } from '../myComponents'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { removeItem } from '../../actions'



const ProductRow = ({ product, removeItem }) => {

    const { name, category, price, residue, id } = product

    
    return (
        <StyledTableRow onClick={() => console.log(name, category, price, residue, id)}>

            <StyledTableCell align="center"> {name}</StyledTableCell>
            <StyledTableCell align="center">{category}</StyledTableCell>
            <StyledTableCell align="center">{price}</StyledTableCell>
            <StyledTableCell align="center">{residue}</StyledTableCell>

            <StyledTableCell align="center">

                <Button variant="contained" color="primary" align="center" onClick={() => removeItem(id)}>
                    Delete
                        </Button>
            </StyledTableCell>
        </StyledTableRow >
    )

}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => dispatch(removeItem(id))
    }
}


export default connect(null, mapDispatchToProps)(ProductRow)