import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StorageIcon from '@mui/icons-material/Storage';
import HeaderComp from '../ForAllComponents/Header';
import useApp from '../../Hooks/useApp';
import CompanyDetails from './CompanyDetails';
import RegionalSettings from './RegionalSettings';
import TaskSettings from './TaskSettings';
import { useNavigate } from 'react-router-dom';
import LogOutComponent from './LogOutComponent';


function MainComponent({ open , handleClose}) {


    const navigate = useNavigate()

    const HandleNavigate = () => {
        navigate("/")
    }

    const { checked, setChecked } = useApp();


    useEffect(() => {
        document.querySelector("body").setAttribute("state", true)
    }, [])

    const [state, setState] = useState(false)

    const handleSideBar = () => {
        setState(!state)
        if (state) {
            document.querySelector("body").setAttribute("state", true)
        } else {
            document.querySelector("body").setAttribute("state", false)
        }
    }

    return (
        <>
            <Typography variant='div' component="div" onClick={handleSideBar} className='bar'
                sx={
                    {
                        position: "absolute",
                        top: "27px",
                        right: "10px",
                        background: "white",
                        borderRadius: "5px",
                        padding: "5px",
                        cursor: "pointer",
                        display: "none",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                <StorageIcon />
            </Typography>

            <HeaderComp setChecked={setChecked} checked={checked} />
            <h3 className='textColor my-4 fw-bold'>Company Settings</h3>
            <CompanyDetails />
            <RegionalSettings />
            <TaskSettings />
            <Typography variant='div' component="div" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
            }}>

                <button onClick={HandleNavigate} style={{
                    background: "transparent",
                    color: "white",
                    padding: "7px 15px",
                    borderRadius: "8px",
                    border: "1px solid white",
                    marginRight: "10px",
                    fontWeight: "bold"
                }}>Cancel
                </button>

                <button onClick={HandleNavigate} style={{
                    background: "#7DB00E",
                    color: "white",
                    padding: "7px",
                    borderRadius: "8px",
                    border: "1px solid white",
                    marginLeft: "10px",
                    fontWeight: "bold"

                }}>Update Setting
                </button>

            </Typography>

            <LogOutComponent open={open} handleClose={handleClose} />

        </>
    )
}

export default MainComponent
