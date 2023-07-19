import { Box } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'
import MainComponent from './MainComponent'
import useSettings from './useSettings'

function Settings() {

  const { open , handleClose , handleClickOpen} = useSettings()

  return (
    <Box sx={{ display: 'flex' }}>
        <SideBar handleClickOpen={handleClickOpen}/>
        <Box className='BigMain' component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
          <MainComponent handleClose={handleClose} open={open} />
        </Box>
      </Box>
  )
}

export default Settings
