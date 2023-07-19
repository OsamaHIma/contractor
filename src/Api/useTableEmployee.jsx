import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';

function useTable() {
    function createData 
    (
        ID,
        hourly_salary,
        phone,
        name,
        describe,
        monthly_salary,
    ) 
    
    {
        return {
            ID,
            hourly_salary,
            phone,
            name,
            describe,
            monthly_salary,
        };
    }
    
    const [employee, setEmployee] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsync("api/v1/employee"))
    }, [dispatch])
    
    const data = useSelector(state => state.getDataSlice.data)
    
    useEffect(() => {
        if (data?.employees) {
            setEmployee(data.employees)
        }
    }, [data])
    
    const rows = [
        ...employee.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.hourly_salary}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.user.phone}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.user.name}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.profession.describe}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.monthly_salary}</div>
                )
            )
        })
    ];
    
    const columns = [
        { id: 'ID', label: 'ID' },
        { id: 'hourly_salary', label: 'h-salary' },
        {
            id: 'phone',
            label: 'phone',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'name',
            label: 'name',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'describe',
            label: 'describe',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'monthly_salary',
            label: 'm_salary',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
    ];

    return { rows, columns }
}

export default useTable
