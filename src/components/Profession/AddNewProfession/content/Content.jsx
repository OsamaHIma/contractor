import { Grid, Typography } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import Footer from "../footer/Footer"
import ImgComponent from '../ProfessionImgComponent/ImgComponent'

function Content({ HandleClick, name, setName, describe, setDescribe, file, setFile, img, setImg }) {

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
                    Profession details:
                </Typography>
            </Typography>
        )
    }


    const InputItemComponent = () => {
        return (
            <>
                <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='inp' placeholder='name' type="text"
                        style={
                            {
                                background: "transparent",
                                color: "white",
                                padding: "8px 12px",
                                borderRadius: "7px",
                                border: "1px solid rgb(255 255 255 / 67%)",
                                fontSize: "17px",
                                outline: "none !important"
                            }
                        }
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

                        <ImgComponent
                            file={file}
                            setFile={setFile}
                            img={img}
                            setImg={setImg}
                        />

                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "30px" }} variant='h4' className='textColor'>
                    Describe
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea
                            value={describe}
                            onChange={(e) => setDescribe(e.target.value)}
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

            <Footer HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default Content
