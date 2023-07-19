import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';

function useRequestTable() {
    function createData(CLIENT, PROPERTY, CONTACT, REQUESTED) {
        return { CLIENT, PROPERTY, CONTACT, REQUESTED };
    }

    const [request, setRequest] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsync("api/v1/request"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)

    useEffect(() => {
        if (data?.requests) {
            setRequest(data.requests)
        }
    }, [data])


    const rows = [
        ...request.map((item) => {
            return (
                createData(
                    <span style={{ fontSize: "20px" }}>{item.client.first_name} {item.client.last_name}</span>,
                    <span style={{ fontSize: "20px" }}>{item.title}</span>,
                    <span style={{ fontSize: "20px" }}>{item.client.email}</span>,
                    <span style={{ color: "#8ADF16", fontSize: "25px" }}>{JSON.stringify(item.end_time).slice(1,11)}</span>
                )
            )
        })

    ];

    const columns = [
        { id: 'CLIENT', label: 'CLIENT' },
        { id: 'PROPERTY', label: 'TITLE / PROPERTY' },
        {
            id: 'CONTACT',
            label: 'CONTACT',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'REQUESTED',
            label: 'REQUESTED',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    return { rows, columns }
}

export default useRequestTable
