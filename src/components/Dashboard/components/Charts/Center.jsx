import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function Center() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 2398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 3800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='my-5'>
            <Grid container spacing={5}>
                
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='div' component="div" sx={{
                        width: "100%",
                        height: "350px",
                        background: "#7DB00E"
                    }}>

                    </Typography>

                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='div' component="div" sx={{
                        background: "white",
                        borderTop: "10px solid #F07065",
                        borderRadius: "5px 5px 0 0"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "#D9D9D9",
                            color: "black",
                            fontSize: "22px",
                            fontWeight: '700',
                            padding: "7px 0 7px 10px"
                        }}>
                            Qute
                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Approved
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Changes requested
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Draft
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>


                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Last 7 Days
                            </Typography>


                            <div style={{ width: "100%", height: "100px" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <Line type="monotone" dot="" dataKey="pv" stroke="#09BD3C" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>

                            </div>

                            <Typography variant='div' component="div" sx={{ fontWeight: "bold", textAlign: "left", fontSize: '15px', padding: "5px 10px" }}>
                                Send your clients professional quotes they can approve online

                            </Typography>

                            <Button
                                sx={{
                                    background: "#7DB00E",
                                    padding: "7px 18px",
                                    color: "white",
                                    fontWeight: "bold",
                                    border: "2px solid #7DB00E",
                                    margin: "7px 0",
                                    "&:hover": {
                                        color: "black"
                                    }
                                }}
                            >Create Qute</Button>


                        </Typography>


                    </Typography>

                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='div' component="div" sx={{
                        background: "white",
                        borderTop: "10px solid #7CB041",
                        borderRadius: "5px 5px 0 0"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "#D9D9D9",
                            color: "black",
                            fontSize: "22px",
                            fontWeight: '700',
                            padding: "7px 0 7px 10px"
                        }}>
                            Jobs
                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Requires invoicing
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Action required
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Active
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>


                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Last 7 Days
                            </Typography>


                            <div style={{ width: "100%", height: "100px" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <Line type="monotone" dot="" dataKey="pv" stroke="#09BD3C" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>

                            </div>

                            <Typography variant='div' component="div" sx={{ fontWeight: "bold", textAlign: "left", fontSize: '15px', padding: "5px 10px" }}>
                                Schedule jobs with all the details you need to get them done

                            </Typography>

                            <Button
                                sx={{
                                    background: "#7DB00E",
                                    padding: "7px 18px",
                                    color: "white",
                                    fontWeight: "bold",
                                    border: "2px solid #7DB00E",
                                    margin: "7px 0",
                                    "&:hover": {
                                        color: "black"
                                    }
                                }}
                            >Schedule a Job</Button>


                        </Typography>

                    </Typography>

                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant='div' component="div" sx={{
                        background: "white",
                        borderTop: "10px solid #585595",
                        borderRadius: "5px 5px 0 0"
                    }}>
                        <Typography variant='div' component="div" sx={{
                            background: "#D9D9D9",
                            color: "black",
                            fontSize: "22px",
                            fontWeight: '700',
                            padding: "7px 0 7px 10px"
                        }}>
                            Invoices
                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Requires invoicing
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Action required
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Active
                            </Typography>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: "18px",
                                    color: "black",
                                    margin: "5px 0"
                                }}>
                                0
                            </Typography>

                        </Typography>


                        <Typography variant='div' component="div"
                            sx={{
                                borderBottom: "1px solid black",
                                padding: "7px 0 7px 10px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                            <Typography variant='div' component="div"
                                sx={{
                                    fontWeight: '700',
                                    fontSize: "18px",
                                    color: "black"
                                }}>
                                Last 7 Days
                            </Typography>


                            <div style={{ width: "100%", height: "100px" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <Line type="monotone" dot="" dataKey="pv" stroke="#09BD3C" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>

                            </div>

                            <Typography variant='div' component="div" sx={{ fontWeight: "bold", textAlign: "left", fontSize: '15px', padding: "5px 10px" }}>
                                Send your clients professional invoices they can pay online

                            </Typography>

                            <Button
                                sx={{
                                    background: "#7DB00E",
                                    padding: "7px 18px",
                                    color: "white",
                                    fontWeight: "bold",
                                    border: "2px solid #7DB00E",
                                    margin: "7px 0",
                                    "&:hover": {
                                        color: "black"
                                    }
                                }}
                            >
                                Create An Invoices
                            </Button>


                        </Typography>


                    </Typography>

                </Grid>

            </Grid>
        </div>
    )
}

export default Center
