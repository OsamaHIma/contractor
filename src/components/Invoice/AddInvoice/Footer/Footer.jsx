import { Button, Typography } from '@mui/material'
import React from 'react'
import useInvoice from '../../../../Hooks/useInvoice'

function Footer({HandleClick}) {

    
    const {HandleAddCloseInvoice} = useInvoice()

  return (
    <Typography variant='div' component="div" sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        borderTop: "1px solid white",
        padding: "30px 0 5px"
    }}>
        <Typography variant='div' component="div">
            <Button onClick={HandleAddCloseInvoice} sx={{
                border: "1px solid #FFFFFF",
                background: "transparent",
                padding: "7px 22px",
                borderRadius: "7px",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                    opacity: 0.7
                }
            }}>
                Cancel
            </Button>

        </Typography>
        <Typography variant='div' component="div">
            <Button onClick={HandleClick} sx={{
                background: "transparent",
                padding: "7px 15px",
                color: '#7DB00E',
                border: "2px solid #7DB00E",
                borderRadius: "7px",
                fontWeight: "bold",
                marginRight: "30px",
                "&:hover": {
                    opacity: 0.7
                }
            }}>
                Save And Create Another
            </Button>

            <Button onClick={HandleClick} sx={{
                background: "#7DB00E",
                padding: "7px 20px",
                color: 'white',
                border: "2px solid white",
                borderRadius: "7px",
                fontWeight: "600"
            }}>
                Save Invoice
            </Button>

        </Typography>

    </Typography>
  )
}

export default Footer
