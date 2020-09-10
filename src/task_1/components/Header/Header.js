import React from 'react'

import { TableHead, TableRow } from '@material-ui/core'
import { StyledTableCell } from '../myComponents'


const Header = (props) => {
    const { headerItems } = props
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