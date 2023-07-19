import { useEffect, useState } from "react";
import { getDataAsync } from "../Redux/Slices/getData/getDataSlice";
import { useDispatch, useSelector } from "react-redux";

function useClientTable() {
    function createData(Client, Property, Contact, name_company) {

        return { Client, Property, Contact, name_company };
    }

    const dispatch = useDispatch()

    const [clients, setClients] = useState([])

    useEffect(() => {
        dispatch(getDataAsync("api/v1/client"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)


    useEffect(() => {
        if (data?.clients) {
            setClients(data.clients)
        }
    }, [data])


    const rows = [

        ...clients.map((item) => {
            return (
                createData(
                    <span>
                        {item.first_name} {item.last_name}
                    </span>,
                    <span>
                        {item.country.slice(0, 15)}
                    </span>,
                    <span>
                        {item.phone}

                    </span>,
                    <span style={{ textAlign: "right " }}>

                        {item.name_company}
                    </span>
                )
            )
        })
    ];

    const columns = [
        {
            id: 'Client',
            label: 'Client'
        },
        {
            id: 'Property',
            label: 'Property'
        },
        {
            id: 'Contact',
            label: 'Contact',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'name_company',
            label: 'name company',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },

    ];

    return { rows, columns }
}

export default useClientTable
