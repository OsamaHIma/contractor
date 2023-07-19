import React, { useEffect, useState } from 'react'
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';
import { useDispatch, useSelector } from 'react-redux';

function useTaskTable() {


    function createData(ID, Title, Client, Date, status, Team) {
        return { ID, Title, Client, Date, status, Team };
    }

    const dispatch = useDispatch()

    const [task, setTasks] = useState([])


    useEffect(() => {
        dispatch(getDataAsync("api/v1/task"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)


    useEffect(() => {
        if (data?.tasks) {
            setTasks(data.tasks)
        }
    }, [data])



    const rows = [
        ...task.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.describe).slice(0,15)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.name).slice(0,15)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.start_time).slice(1,11)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.status}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.team.name}</div>
                ))
        })


    ];

    const columns = [
        { id: 'ID', label: 'ID' },
        { id: 'Title', label: 'Title' },
        {
            id: 'Client',
            label: 'Client',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Date',
            label: 'Date',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'status',
            label: 'status',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Team',
            label: 'Team',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }
}

export default useTaskTable
