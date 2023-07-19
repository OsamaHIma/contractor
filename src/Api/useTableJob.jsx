import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';

function useTableJob() {
    function createData(CLIENT, PROPERTY, NextVisit, INVIOCING, TOTAL) {

        return { CLIENT, PROPERTY, NextVisit, INVIOCING, TOTAL };
    }


    const [job, setJob] = useState([])
    const [randomjob, setRandomjob] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsync("api/v1/job"))
        dispatch(getDataAsync(`api/v1/job/${Math.floor(Math.random() * 23)}`))
    }, [dispatch])
    
    const data = useSelector(state => state.getDataSlice.data)
    
    useEffect(() => {
        if (data?.jops) {
            setJob(data.jops)
            setRandomjob(data.jops[Math.floor(Math.random() * 23)])
        }
        
    }, [data])

    const rows = [
        ...job.map((item) => {
            return(
                createData(
                    <span style={{ fontSize: "20px" }}>ِ{item.title} {item.instruction.slice(0,14)}</span>,
                    <span style={{ fontSize: "20px" }}>ِ{item.title}</span>,
                    <span style={{ fontSize: "20px", color: "#8ADF16" }}>ِ{JSON.stringify(item.end_day).slice(1,11)} <div className='textColor'>Monthly</div></span>,
                    <span style={{ fontSize: "20px" }}>{item.instruction.slice(0,10)}</span>,
                    <span style={{ fontSize: "20px" }}>{item.company_id}</span>,
                )
            )
        })
        
    ];

    const rows2 = [

        createData(
            <span style={{ fontSize: "20px" }}>ِ{randomjob?.title} {randomjob?.instruction?.slice(0,14)}</span>,
            <span style={{ fontSize: "20px" }}>ِ{randomjob?.title}</span>,
            <span style={{ fontSize: "20px", color: "#8ADF16" }}>ِ{JSON.stringify(randomjob?.start_day)?.slice(1,11)} <div className='textColor'>Monthly</div></span>,
            <span style={{ fontSize: "20px" }}>{randomjob?.instruction?.slice(0,10)}</span>,
            <span style={{ fontSize: "20px" }}>{randomjob?.client_id}</span>,
        ),

    ];


    const columns = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'NextVisit',
            label: 'NextVisit / SCHEDULE',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'INVIOCING',
            label: 'INVIOCING',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TOTAL',
            label: 'TOTAL',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];


    const columns2 = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'NextVisit',
            label: 'NextVisit / SCHEDULE',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'INVIOCING',
            label: 'INVIOCING',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'TOTAL',
            label: 'TOTAL',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    return { rows, columns, rows2, columns2 }
}

export default useTableJob
