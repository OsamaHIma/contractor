import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../Redux/Slices/getData/getDataSlice';

function useInvoiceTable() {

    function createData(number, client_id, PayFor, address, SendingDate, PaymentDue, Elements, AllAmounts, Discount, Tax) {
        return { number, client_id, PayFor, address, SendingDate, PaymentDue, Elements, AllAmounts, Discount, Tax };
    }

    const [invoice, setInvoice] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDataAsync("api/v1/invoice"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)


    useEffect(() => {
        if (data?.invoices) {
            setInvoice(data.invoices)
        }
    }, [data])




    const rows = [
        ...invoice.map((item) => {
            return (
                createData(
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>#{item.client_id}</div>
                    
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.payment}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>##</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{item.due_date.slice(0,10)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.subtotal).slice(0,3)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>25</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>${JSON.stringify(item.total).slice(0,5)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>${JSON.stringify(item.discount).slice(0,5)}</div>
                    ,
                    <div className="textColor " style={{ fontSize: "16px" }}>${JSON.stringify(item.tax_rate).slice(0,3)}</div>
                    ,
                )
            )
        })

    ];

    const columns = [
        {
            id: 'number',
            label: 'number'
        },
        {
            id: 'client_id',
            label: 'client_id',
            align: 'center',

        },
        {
            id: 'PayFor',
            label: 'Pay for',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'address',
            label: 'address',
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'SendingDate',
            label: 'Sending Date',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'PaymentDue',
            label: 'Payment due',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Elements',
            label: 'Elements',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'AllAmounts',
            label: 'All amounts',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Discount',
            label: 'Discount',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'Tax',
            label: 'Tax',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }
}

export default useInvoiceTable
