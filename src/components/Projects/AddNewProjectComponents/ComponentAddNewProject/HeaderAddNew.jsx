import { Typography } from '@mui/material'
import React from 'react'

import backIcon from "../../../../Icons/BackToProjectIcon.png"

import useProjectCenter from "../../../../Hooks/useProjectCenter"

function HeaderAddNew() {

    const { HandleAddCloseProject } = useProjectCenter()

    return (
        <Typography variant='div' component="div" >
            <Typography variant='div' component="div">
                <Typography variant='span' component="span" onClick={HandleAddCloseProject} sx={{ cursor: "pointer" }} >
                    <img src={backIcon} alt="" />
                </Typography>
            </Typography>

            <Typography variant='h4' component="div" sx={{ marginTop: "30px", color: "white" }}>
                New Project
            </Typography>

        </Typography>
    )
}

export default HeaderAddNew
