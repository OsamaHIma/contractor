import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import CenterSchedule from './CenterSchedule';
import Salender from '../ForAllComponents/Salender';
import { Typography } from '@mui/material';

function Schedule() {
  const { checked, setChecked } = useApp();

  return (
    <Typography variant='div' component="div" sx={{p:3}}>
      <HeaderComp setChecked={setChecked} checked={checked} />
      <CenterSchedule/>
      <Salender height={700} mt={4}/>


    </Typography>
  )
}

export default Schedule
