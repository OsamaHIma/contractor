import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import useRequestTable from '../../../Api/useRequestTable'



function AddRequest() {

    const { rows, columns } = useRequestTable()


    return (
        
        <Typography variant='div' component="div">
            <Typography variant='div' component="div"
                sx={{
                    marginTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Typography variant='div' component="div" sx={{ fontSize: "30px", fontWeight: "700", color: "#DADADA" }}>
                    Requested
                </Typography>
                <Typography variant='div' component="div" sx={{ fontSize: "18px", fontWeight: "700", color: "#C4C4C4" }}>
                    {rows.length} requests
                </Typography>
            </Typography>

            <TableContainer component={Paper} sx={{ marginTop: "20px", width: "100%", overflow: "auto", position: "relative", minHeight: "450px" }}>
                <Table sx={{ width: "100%", position: "absolute", minHeight: "220px !important" }} stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        background: 'linear-gradient(180deg, #7DB00E 0%, #377114 100%)',
                                        padding: '10px !important',
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "17px",
                                        paddingLeft: "15px !important",


                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .map((row, index) => {
                                return (
                                    <TableRow sx={{
                                        "&:hover": {
                                            background: "rgba(60, 162, 224, 0.2) !important",
                                            
                                        }
                                    }} hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} sx={{ color: "white ", height: '102px' }}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Typography>
    )
}

export default AddRequest
