import { Avatar, Button } from '@mui/material';
import { useEffect, useState } from "react";
import { DeleteAsync } from '../Redux/Slices/deleteData/DeleteSlice';
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';

function useProfessionTable() {
    
    function createData(ID, Image, name, describe, company_id , Delete) {
        return { ID, Image, name, describe, company_id, Delete };
    }

    const [profession, setProfession] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsync("api/v1/profession"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)
    const dataDelete = useSelector(state => state.DeleteData)

    useEffect(() => {
        if (data?.professions) {
            setProfession(data.professions)
        }
    }, [data])


    const deteleFun = async (item) => {

        await dispatch(DeleteAsync(["item", item.id]))

        console.log(dataDelete);
    }

    const rows = [
        ...profession.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>,
                    <Avatar src={item.image} />
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.name}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.describe}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.company_id}</div>
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
        { id: 'ID', label: 'ID' },
        { id: 'Image', label: 'Image' },
        {
            id: 'name',
            label: 'Name',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'describe',
            label: 'describe',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'company_id',
            label: 'company_id',
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

export default useProfessionTable
