import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LogoItem from "../../../Icons/ItemsLogo.png"
import SelectComponents from './SelectComponents'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { sendDataAsync } from '../../../Redux/Slices/sendData/sendDataSlice'
import Notify from '../../Notify'
import { ToastContainer } from 'react-toastify'

function ContentEmp() {

    const dispatch = useDispatch()


    const [user_id, setUser_id] = useState("")


    const [profession_id, setProfession_id] = useState("")

    const [hourly_salary, setHourly_salary] = useState("")

    const [monthly_salary, setMonthly_salary] = useState("")

    const [load, setLoad] = useState(false)

    const data = useSelector(state => state.sendData)



    const HandleClick = async () => {
        if (user_id !== "" && profession_id !== "" && hourly_salary !== "" && monthly_salary !== "") {

            const form = { user_id, company_id: user_id, profession_id, hourly_salary, monthly_salary }

            await dispatch(sendDataAsync(["employee", form]))

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
                    setUser_id("")
                    setProfession_id("")
                    setHourly_salary("")
                    setMonthly_salary("")
                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error please try again later", "error")
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
                    Employee details:
                </Typography>
            </Typography>
        )
    }


    const InputItemComponent = () => {
        return (
            <>
                <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                    <input className='inp' placeholder='user_id' type="text" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }}
                        value={user_id}
                        onChange={(e) => setUser_id(e.target.value)}
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
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "600px"
        }}>


            <Typography variant='div' component="div" sx={{
                height: "100%",
                paddingRight: "20px"
            }}>
                {TitleComponent()}

                {InputItemComponent()}

                <SelectComponents type={profession_id} setType={setProfession_id} inventory={hourly_salary} setInventory={setHourly_salary} price={monthly_salary} setPrice={setMonthly_salary} />

            </Typography>

            <Footer HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />

        </Typography>
    )
}

export default ContentEmp
