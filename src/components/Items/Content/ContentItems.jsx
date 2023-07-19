import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LogoItem from "../../../Icons/ItemsLogo.png"
import SelectComponents from './SelectComponents'
import ItemImgComponent from './ItemImgComponent'
import Footer from '../AddNewItems/Footer/Footer'
import { asyncDataWithImg } from '../../../Redux/Slices/sendData/dataWithImgSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../Notify'


function ContentItems() {

    const [item, setItem] = useState("")

    const [file, setFile] = useState(null);

    const [img, setImg] = useState("")

    const [type, setType] = useState("")

    const [id, setInventory] = useState("")

    const [price, setPrice] = useState(0)

    const [describe, setDescribe] = useState("")

    const [load, setLoad] = useState(false)


    const dispatch = useDispatch()

    const data = useSelector(state => state.dataWithImg)

    const HandleClick = async () => {
        if (item !== "" && file !== null && type !== "" && id !== "" && price !== 0 && describe !== "") {
            const form = new FormData()
            form.append("name", item)
            form.append("type", type)
            form.append("describe", describe)
            form.append("price", price)
            form.append("company_id", id)
            form.append("image", file?.target?.files[0])

            await dispatch(asyncDataWithImg(["item", form]))

            setLoad(true)

        } else {
            Notify("please fill your data ", "warning")
        }
    }


    useEffect(() => {
        if (load) {
            if (data.loading === false) {
                if (data.status === 200) {
                    Notify(data.data.message, "success")
                    setItem("")
                    setFile(null)
                    setImg("")
                    setType("")
                    setInventory("")
                    setPrice(0)
                    setDescribe("")

                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])



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
                    <img src={LogoItem} alt="" />
                </Typography>
                <Typography className='Text' sx={{ fontSize: "28px", fontWeight: "500" }}>
                    Item details:
                </Typography>
            </Typography>
        )
    }


    const InputItemComponent = () => {
        return (
            <>

                <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                    <input className='inp' placeholder='Item name' type="text" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }}
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
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

                        <SelectComponents
                            type={type}
                            setType={setType}
                            inventory={id}
                            setInventory={setInventory}
                            price={price}
                            setPrice={setPrice}
                        />

                        <ItemImgComponent
                            file={file}
                            setFile={setFile}
                            img={img}
                            setImg={setImg}
                        />

                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "30px" }} variant='h4' className='textColor'>
                        Description
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea value={describe} onChange={(e) => setDescribe(e.target.value)}
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

export default ContentItems
