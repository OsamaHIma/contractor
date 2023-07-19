import { Typography } from '@mui/material'
import React from 'react'
import RequestDetails from './CenterComponents/RequestDetails'
import ServiceDetails from './CenterComponents/ServiceDetails'
import AssignTo from './CenterComponents/AssignTo'

function CenterAddNewRequest({title , setTitle , instruction , setInstruction}) {
    return (
        <Typography variant='div' component="div">
            <RequestDetails title={title} setTitle={setTitle}/>
            <AssignTo  />
            <ServiceDetails instruction={instruction} setInstruction={setInstruction} />
        </Typography>
    )
}

export default CenterAddNewRequest
