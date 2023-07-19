import React from 'react'
import { Grid, Typography } from '@mui/material'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';

function Reports() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp noCheack={true} setChecked={setChecked} checked={checked} />
            <Typography className='textColor fw-bold' sx={{marginTop: "10px" , fontSize: "30px"}}>Reports</Typography>

            <Grid sx={{marginTop: "1px"}} container spacing={3} >
                <Grid  item xs={12} md={6} lg={4}>
                    <Typography variant='div' component="div" sx={{
                        background: "#012939"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            color: "white",
                            textAlign: "center",
                            fontSize: "20px",
                            padding: "12px",
                            fontWeight: "bold",
                            marginBottom: "15px"

                        }}>
                            Financial reports
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Transaction list</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All transaction from invoices & payment.</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Invoices</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All invoices that are drafts, paid or bad debt</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Taxation</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>


                    <Typography variant='div' component="div" sx={{
                        background: "#012939"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            color: "white",
                            textAlign: "center",
                            fontSize: "20px",
                            padding: "12px",
                            fontWeight: "bold",
                            marginBottom: "15px"
                        }}>
                            Work reports
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Transaction list</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All transaction from invoices & payment.</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Invoices</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All invoices that are drafts, paid or bad debt</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Taxation</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>


                    </Typography>

                </Grid>

                <Grid item xs={12} md={6} lg={4}>


                    <Typography variant='div' component="div" sx={{
                        background: "#012939"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            color: "white",
                            textAlign: "center",
                            fontSize: "20px",
                            padding: "12px",
                            fontWeight: "bold",
                            marginBottom: "15px"
                        }}>
                            Client reports
                        </Typography>

                        

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Transaction list</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All transaction from invoices & payment.</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Invoices</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All invoices that are drafts, paid or bad debt</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Taxation</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Projected income</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>Projected income from invoice awaiting payment</p>
                        </Typography>

                    
                    </Typography>


                    <Typography variant='div' component="div" sx={{
                        background: "#012939",
                        marginTop: "20px"
                    }}>

                        <Typography variant='div' component="div" sx={{
                            background: "linear-gradient(180deg, #7DB00E 0%, #377114 100%)",
                            color: "white",
                            textAlign: "center",
                            fontSize: "20px",
                            padding: "12px",
                            fontWeight: "bold",
                            marginBottom: "15px"
                        }}>
                            Expense reports
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            padding: "15px 15px 5px",
                            borderBottom: "0.995383px solid rgba(255, 255, 255, 0.2)"
                        }}>
                            <h5>Transaction list</h5>
                            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px" }}>All transaction from invoices & payment.</p>
                        </Typography>

                    </Typography>

                </Grid>
            </Grid>


        </Typography>
    )
}

export default Reports
