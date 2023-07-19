import { Button, Typography } from '@mui/material'
import React from 'react'
import useClient from '../../../../Hooks/useClient'

function FooterBtnClient({HandleClick}) {

    const { HandleAddCloseClient } = useClient()


    return (
        <Typography className='WhenSave' variant='div' component="div" sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "30px 20px 0px",
            display: "flex"
            
        }}>
            <Typography variant='div' component="div">
                <Button onClick={HandleAddCloseClient} sx={{
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

                <Button onClick={HandleClick}  sx={{
                    background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                    padding: "7px 20px",
                    color: 'white',
                    border: "2px solid white",
                    borderRadius: "7px",
                    fontWeight: "600"
                }}>
                    Save Client
                </Button>

            </Typography>


        </Typography>
    )
}

export default FooterBtnClient
