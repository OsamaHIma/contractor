import React, { useEffect, useState } from 'react'
import StorageIcon from '@mui/icons-material/Storage';
import { Outlet, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material';

function MainComponent() {

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


    const navigate = useNavigate()
    
    useEffect(() => {
        if(localStorage.getItem("token") === null){
            navigate("login")
        }
    },[navigate])

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
            
            <Outlet />
        </>
    )
}

export default MainComponent
