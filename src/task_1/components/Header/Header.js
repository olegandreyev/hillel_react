import React from 'react'

import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../myComponents'
import { connect } from 'react-redux'

import { headerItems } from '../../data/arrays'

const Header = () => {

    return (
        <TableHead>
            <TableRow>
                {
                    headerItems.map(item => {
                        return <StyledTableCell align="center" key={item.id}>{item.name}</StyledTableCell>
                    })
                }
            </TableRow>
        </TableHead>
    )
}




export default Header