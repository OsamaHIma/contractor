import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import iconDropImg from "../../../../Icons/IconDropimg.png"


function ImgComponent({file , setFile , img , setImg }) {
    const handleChange = (file) => {
        if (file) {
            setFile(file);
        }
    };

    useEffect(() => {
        if (file) {
            setImg(URL.createObjectURL(file?.target?.files[0]));
        }
    }, [file, setImg])

    const NoImg = () => {
        return (
            <Typography htmlFor="file" sx={{ height: "200px", margin: "15px 0" }} variant='div' component="div">
                <label htmlFor="file" style={{ height: "100%" }}>
                    <input id='file' type="file" onChange={handleChange} />
                    <Typography variant='div' component="div" className='parentInputImg' sx={{
                        width: "270px",
                        height: "100%",
                        border: "2px dashed  #7DB00E",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        cursor: "pointer"
                    }} >
                        <Typography sx={{ margin: "20px 0", cursor: "pointer" }} variant='div' component="div">
                            <img src={iconDropImg} alt="" />
                        </Typography>
                        <Typography variant='div' component="div">
                            <Typography className='Text' style={{ fontSize: "bold !important", cursor: "pointer", textAlign: "center" }}>Drop your image here or select <span style={{ color: "#7DB00E" }}>click to browse</span></Typography>
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
            flexDirection: "column"
        }}>
            <Typography className='Text' variant='h5' component="div">
                Profession image:
            </Typography>

            <Typography variant='div' component="div" className='d-flex justify-content-center'>
                {img ?
                    (
                        <Typography onClick={() => setImg("")} sx={{
                            margin: "15px 0",
                            cursor: "pointer",
                            maxWidth: "300px",
                            height: "200px",
                            border: "2px solid white",
                            borderRadius: ""
                        }} variant='div' component="div">
                            <img className='w-100 h-100' src={img} alt="" />
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

export default ImgComponent
