import { Typography } from '@mui/material';

import React, { useEffect, useState } from 'react'


function InvoiceImgComponent() {
    const [file, setFile] = useState(null);
    const [img, setImg] = useState("")

    const handleChange = (file) => {
        if (file) {
            setFile(file);
        }
    };

    useEffect(() => {
        if (file) {
            setImg(URL.createObjectURL(file?.target?.files[0]));
        }
    }, [file])



    const NoImg = () => {
        return (
            <Typography htmlFor="file" sx={{ height: "140px", margin: "15px 0" }} variant='div' component="div">
                <label htmlFor="file" style={{ height: "100%" }}>
                    <input id='file' type="file" onChange={handleChange} />
                    <Typography variant='div' component="div" className='parentInputImg' sx={{
                        width: "140px",
                        height: "100%",
                        border: "2px dashed  #7DB00E",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }} >

                        <Typography variant='div' component="div">
                            <Typography className='Text' style={{
                                fontSize: "bold !important",
                                cursor: "pointer",
                                textAlign: "center",
                                color: "#b1afaf"
                            }}>Logo
                            </Typography>
                        </Typography>
                    </Typography>
                </label >
            </Typography>

        )
    }



    return (
        <Typography variant='div' component="div" sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
            
        }}>
            <Typography className='Text' variant='h5' component="div">
                Company Logo
            </Typography>

            <Typography variant='div' component="div" sx={{marginLeft: "5%"}}>
                {img ?
                    (
                        <Typography onClick={() => setImg("")} sx={{
                            margin: "15px 0",
                            cursor: "pointer",
                            maxWidth: "140px",
                            height: "140px",
                            border: "2px solid white",
                            borderRadius: "50%",
                            overflow: "hidden"
                        }} variant='div' component="div">
                            <img className='w-100 h-100' style={{overflow: "hidden" }} src={img} alt="" />
                        </Typography>
                    )
                    :
                    (
                        NoImg()
                    )
                }
            </Typography>

        </Typography >

    )
}

export default InvoiceImgComponent
