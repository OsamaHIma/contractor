import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';
import { Avatar, Button } from '@mui/material';
import { DeleteAsync } from '../Redux/Slices/deleteData/DeleteSlice';

function useCompanyTable() {
    function createData(id, image, country, city, phone, Delete) {

        return { id, image, country, city, phone, Delete };
    }

    const dispatch = useDispatch()

    const [company, setCompany] = useState([])

    useEffect(() => {
        dispatch(getDataAsync("api/v1/company"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)

    useEffect(() => {
        if (data?.company) {
            setCompany(data.company)
        }
    }, [data])

    const deteleFun = async (item) => {
        await dispatch(DeleteAsync(["company", item.id]))
    }

    const rows = [
        ...company.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>,
                    <div style={{ width: "100%", display: "flex", justifyContent: 'end' }}>
                        <Avatar src={item.image} />
                    </div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.country}</div>
                    ,
                    <div className="textColor +-" style={{ fontSize: "16px" }}>{item.city}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.phone}</div>
                    ,
                    <Button onClick={() => deteleFun(item)}
                        sx={{
                            background: "#8d1a1a",
                            color: "white",
                            border: "1px solid #8d1a1a",
                            width: "55%",
                            padding: "7px",
                            textTransform: "capitalize",
                            letterSpacing: "1.5px",
                            fontWeight: 'bold'
                        }}>
                        Delete
                    </Button>
                )
            )
        })
    ];

    const columns = [
        { id: 'id', label: 'ID' },
        { id: 'image', label: 'Image', align: "right" },
        {
            id: 'country',
            label: 'Country',
            align: "center"
        },
        {
            id: 'city',
            label: 'City',
            align: "center"
        },
        {
            id: 'phone',
            label: 'Phone',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Delete',
            label: 'Delete',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    return { rows, columns }
}

export default useCompanyTable
