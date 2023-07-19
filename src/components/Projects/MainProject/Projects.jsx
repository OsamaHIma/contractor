import React from 'react'
import ProjectCenter from './ProjectCenter'
import ProjectTable from './ProjectTable'
import AddNewProject from '../AddNewProjectComponents/MainAddNewProject/AddNewProject'
import HeaderComp from '../../ForAllComponents/Header'
import useApp from '../../../Hooks/useApp'
import { Typography } from '@mui/material'


function Projects() {

  const { checked, setChecked } = useApp();



  return (

    <Typography variant='div' component="div" sx={{ p: 3 }}>
      <HeaderComp setChecked={setChecked} checked={checked} />
      <ProjectCenter />
      <ProjectTable />
      <AddNewProject />
    </Typography>
  )
}

export default Projects
