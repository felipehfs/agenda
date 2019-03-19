import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell, Icon, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import { Edit } from '@material-ui/icons'

const GenericTable = ({ rows, ...props }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell colSpan={2}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                 <IconButton component="span" 
                                    onClick={e => props.onUpdate(row) }
                                    aria-label="Edit" color="default">
                                    <Edit />
                                </IconButton>
                                <IconButton component="span" 
                                    onClick={e => props.onRemove(row.id) }
                                    aria-label="Delete" color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default GenericTable