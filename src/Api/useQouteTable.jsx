import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';
import { DeleteAsync } from '../Redux/Slices/deleteData/DeleteSlice';

function useQouteTable() {

    function createData(ID, Title, Time, tax_name, Total, Delete) {
        return { ID, Title, Time, tax_name, Total, Delete };
    }

    const dispatch = useDispatch()

    const [quote, setQuote] = useState([])


    useEffect(() => {
        dispatch(getDataAsync("api/v1/quote"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)

    useEffect(() => {
        if (data?.quotes) {
            setQuote(data.quotes)
        }
    }, [data])

    const deteleFun = async (item) => {

        await dispatch(DeleteAsync(["quote", item.id]))

    }

    const rows = [
        ...quote.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.title}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.created_at}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.tax_name}</div>
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
                    }} onClick={() => deteleFun(item)}>
                        Delete
                    </Button>
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
            id: 'tax_name',
            label: 'Tax_name',
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

export default useQouteTable
