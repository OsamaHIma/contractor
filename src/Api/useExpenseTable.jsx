import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';
import { DeleteAsync } from '../Redux/Slices/deleteData/DeleteSlice';
import { Button } from '@mui/material';

function useExpenseTable() {


    function createData(ID, Title, Time, Date, Total , Delete) {
        return { ID, Title, Time, Date, Total , Delete };
    }

    const dispatch = useDispatch()

    const [expenses, setExpenses] = useState([])

    
    useEffect(() => {
        dispatch(getDataAsync("api/v1/expense"))
    }, [dispatch])
    
    const data = useSelector(state => state.getDataSlice.data)
    
    
    useEffect(() => {
        if (data?.expenses) {
            setExpenses(data.expenses)
        }
    }, [data])
    

    const deteleFun = async (item) => {
        await dispatch(DeleteAsync(["expense" , item.id]))
    }


    const rows = [
        ...expenses.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.title}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.created_at}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.date).slice(1,11)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>${item.total}</div>
                    ,
                    <Button sx={{
                        background: "#8d1a1a",
                        color: "white",
                        border: "1px solid #8d1a1a",
                        width: "55%",
                        padding: "7px",
                        textTransform: "capitalize",
                        letterSpacing: "1.5px",
                        fontWeight: 'bold'
                    }} onClick={() => deteleFun(item)}>Delete</Button>
                )
            )
        })

    ];

    const columns = [
        {
            id: 'ID',
            label: 'ID',
        },
        { id: 'Title', label: 'Title' },
        {
            id: 'Time',
            label: 'Time',
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
            id: 'Total',
            label: 'Total',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Delete',
            label: 'Delete',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        
    ];

    return { rows, columns }
}

export default useExpenseTable
