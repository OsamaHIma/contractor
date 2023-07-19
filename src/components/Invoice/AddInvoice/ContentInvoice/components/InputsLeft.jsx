import { FormControl, Typography } from '@mui/material'
import React from 'react'

function InputsLeft({ client_id, setClient_id, discount, setDiscount, setType_discount, type_discount, payment, setPayment }) {



    return (
        <div>
            <Typography variant='div' component="div">
                <Typography variant='div' component="div" sx={{ color: "white", margin: "5px 0 10px " }}>
                    client_id
                </Typography>
                <Typography variant='div' component="div">
                    <input maxLength={2}
                        value={client_id}
                        onChange={(e) => setClient_id(e.target.value)}
                        type="text" style={{
                            background: "transparent",
                            color: "white",
                            padding: "8px 12px",
                            borderRadius: "7px",
                            border: "1px solid rgba(255, 255, 255, 0.67)",
                            fontSize: "17px"
                        }} />
                </Typography>
            </Typography>

            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    type discound
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ width: "100%" }}>
                        <input
                            value={type_discount}
                            onChange={(e) => setType_discount(e.target.value)}
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
                    Discount
                </Typography>
                <Typography variant='div' component="div">
                    <input
                        onChange={(e) => setDiscount(e.target.value)}
                        value={discount}
                        type="number" style={{
                            background: "transparent",
                            color: "white",
                            padding: "8px 12px",
                            borderRadius: "7px",
                            border: "1px solid rgba(255, 255, 255, 0.67)",
                            fontSize: "17px"
                        }} />
                </Typography>
            </Typography>


            <Typography variant='div' component="div" >
                <Typography variant='div' component="div" sx={{ color: "white", margin: "15px 0 5px " }}>
                    Payment
                </Typography>
                <Typography variant='div' component="div">

                    <FormControl sx={{ m: 1, width: "100%" }}>
                        <input
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
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


        </div>
    )
}

export default InputsLeft
