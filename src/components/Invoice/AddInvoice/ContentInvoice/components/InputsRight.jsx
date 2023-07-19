import { FormControl, Typography } from '@mui/material'
import React from 'react'

function InputsRight({ total, setTotal, setTax_rate, tax_rate, setSubtotal, subtotal, tax_name, setTax_name }) {




    return (
        <div style={{ marginTop: "16px" }}>

            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    Tax Name
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ width: "100%" }}>
                        <input
                            value={tax_name}
                            onChange={(e) => setTax_name(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{
                                background: "transparent",
                                color: "white",
                                padding: "8px 12px",
                                borderRadius: "7px",
                                border: "1px solid rgba(255, 255, 255, 0.67)",
                                fontSize: "17px"
                            }}
                        />

                    </FormControl>

                </Typography>
            </Typography>


            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    subTotal
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ width: "100%" }}>
                        <input
                            value={subtotal}
                            onChange={(e) => setSubtotal(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{
                                background: "transparent",
                                color: "white",
                                padding: "8px 12px",
                                borderRadius: "7px",
                                border: "1px solid rgba(255, 255, 255, 0.67)",
                                fontSize: "17px"
                            }}
                        />

                    </FormControl>

                </Typography>
            </Typography>

            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{ color: "white", margin: "5px 0 10px " }}>
                    Tax rate
                </Typography>
                <Typography variant='div' component="div">
                    <input value={tax_rate}
                        onChange={(e) => setTax_rate(e.target.value)}
                        type="number"
                        style={{
                            background: "transparent",
                            color: "white",
                            padding: "8px 12px",
                            borderRadius: "7px",
                            border: "1px solid rgba(255, 255, 255, 0.67)",
                            fontSize: "17px"
                        }} />
                </Typography>
            </Typography>

            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{ color: "white", margin: "5px 0 10px " }}>
                    total
                </Typography>
                <Typography variant='div' component="div">
                    <input value={total} onChange={(e) => setTotal(e.target.value)} type="number" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgba(255, 255, 255, 0.67)",
                        fontSize: "17px"
                    }} />
                </Typography>
            </Typography>




        </div>
    )
}

export default InputsRight
