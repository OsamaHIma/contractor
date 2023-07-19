
import { Avatar, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getDataAsync } from "../Redux/Slices/getData/getDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAsync } from "../Redux/Slices/deleteData/DeleteSlice";

function useItemsTable() {

    function createData(ID, Image, name, Type, Price, Delete) {
        return { ID, Image, name, Type, Price, Delete };
    }

    const [items, setItems] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsync("api/v1/item"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)
    const dataDelete = useSelector(state => state.DeleteData)

    useEffect(() => {
        if (data?.items) {
            setItems(data.items)
        }
    }, [data])


    const deteleFun = async (item) => {
    
        await dispatch(DeleteAsync(["item" , item.id]))

        console.log(dataDelete);
    
    }

    const rows = [
        ...items.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>,
                    <Avatar src={item.image} />
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.name}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.type}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>${item.price}</div>
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
            id: 'Type',
            label: 'Type',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Price',
            label: 'Price',
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

export default useItemsTable
