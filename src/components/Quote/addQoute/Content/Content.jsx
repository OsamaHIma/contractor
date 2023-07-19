import React from 'react'
import FooterBtns from '../footer/FooterBtns'
import { ToastContainer } from 'react-toastify'
import { Grid, Typography } from '@mui/material'




function Content({
    HandleClick,
    title,
    setTitle,
    subtotal,
    setSubtotal,
    discount,
    setDiscount,
    type_discount,
    setType_discount,
    tax_name,
    setTax_name,
    tax_describe,
    setTax_describe,
    tax_rate,
    setTax_rate,
    total,
    setTotal,
    note,
    setNote
}) {


    const TitleComponent = () => {
        return (
            <Typography variant='div' component="div" display={'flex'} alignItems={"center"} sx={{
                marginBottom: "20px"
            }}>
                <Typography variant='div' component="div" sx={{
                    background: "#7DB00E",
                    padding: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "7px"
                }}>

                </Typography>
                <Typography className='Text' sx={{ fontSize: "28px", fontWeight: "500" }}>
                    Quote details:
                </Typography>
            </Typography>
        )
    }


    const InputItemComponent = () => {
        return (
            <>
                <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                    <input className='inp' placeholder='title' type="text" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Typography>
                <Typography
                    sx={{
                        color: "#dfdedea6",
                        fontSize: "14px"
                    }}
                >
                    Do not exceed 20 characters when entering the item name
                </Typography>
            </>
        )
    }


    return (
        <Typography variant='div' component="div" sx={{
            width: "100%",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 20px"
        }}>


            <Grid container spacing={{ md: 3 }}>
                <Grid item xs={12} md={6} sx={{ borderRight: { md: "0.5px solid #FFFFFF" }, borderBottom: { xs: "0.5px solid #FFFFFF", md: "none" } }}>
                    <Typography variant='div' component="div" sx={{
                        height: "100%",
                        paddingRight: "20px"
                    }}>
                        {TitleComponent()}

                        {InputItemComponent()}

                        <div className='d-flex justify-content-between'>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='subTotal' type="text" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={subtotal}
                                    onChange={(e) => setSubtotal(e.target.value)}
                                />
                            </Typography>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='discount' type="number" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={discount}
                                    onChange={(e) => setDiscount(e.target.value)}
                                />
                            </Typography>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='type_discount' type="text" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={type_discount}
                                    onChange={(e) => setType_discount(e.target.value)}
                                />
                            </Typography>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='tax_name' type="text" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={tax_name}
                                    onChange={(e) => setTax_name(e.target.value)}
                                />
                            </Typography>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='tax_describe' type="text" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={tax_describe}
                                    onChange={(e) => setTax_describe(e.target.value)}
                                />
                            </Typography>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0", width: "47%" }}>
                                <input className='inp w-100' placeholder='tax_rate' type="number" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={tax_rate}
                                    onChange={(e) => setTax_rate(e.target.value)}
                                />
                            </Typography>
                        </div>

                        <div>
                            <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                                <input className='inp w-100' placeholder='total' type="number" style={{
                                    background: "transparent",
                                    color: "white",
                                    padding: "8px 12px",
                                    borderRadius: "7px",
                                    border: "1px solid rgb(255 255 255 / 67%)",
                                    fontSize: "17px",
                                    outline: "none !important"
                                }}
                                    value={total}
                                    onChange={(e) => setTotal(e.target.value)}
                                />
                            </Typography>

                        </div>

                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "30px" }} variant='h4' className='textColor'>
                        Note
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className='textColor'
                            style={{
                                width: "100%",
                                minHeight: "340px",
                                maxHeight: "340px",
                                background: "transparent",
                                borderRadius: "8px",
                                border: "1px solid #ffffff4a",
                                padding: "10px"

                            }}></textarea>

                        <Typography sx={{ color: "#ffffffb0" }}>
                            Do not exceed 100 characters when entering the item name
                        </Typography>

                    </Typography>

                </Grid>
            </Grid>

            <FooterBtns HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default Content
