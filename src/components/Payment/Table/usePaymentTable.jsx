import React from 'react'

function usePaymentTable() {
    function createData(ID, Name, InvoiceId, dataCreated, totalValue, status) {

        return { ID, Name, InvoiceId, dataCreated, totalValue, status };
    }

    const rows = [
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#E3D4D4",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>portal payment</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#FAFF00",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under construvtion</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#1E91CF",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under payment</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#1E91CF",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under payment</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#7DB00E",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Paid</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#FAFF00",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under construvtion</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#DE1E1E",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Cancelled</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#FAFF00",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under construvtion</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#7DB00E",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Paid</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#DE1E1E",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Cancelled</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#7DB00E",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Paid</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#E3D4D4",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>portal payment</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#FAFF00",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under construvtion</span>
            </div>
        ),
        createData(
            <div className="textColor " style={{ fontSize: "16px" }}>#11231</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>Cody Fisher</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>#####</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>21jun, 2021</div>
            ,
            <div className="textColor " style={{ fontSize: "16px" }}>$14,000</div>
            ,
            <div className="paymentText " style={{ fontSize: "16px", textAlign: "left" }}>
                <span style={{
                    background: "#1E91CF",
                    width: "9px ",
                    height: "9px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: '5px'
                }}>
                </span>
                <span>Under payment</span>
            </div>
        ),
    ];

    const columns = [
        { id: 'ID', label: 'ID' },
        {
            id: 'Name',
            label: 'Name',
            align: 'left',
        },
        {
            id: 'InvoiceId',
            label: 'Invoice Id',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'dataCreated',
            label: 'data Created',
            align: 'left',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'totalValue',
            label: 'total Value',
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'status',
            label: 'payment Status',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }
}

export default usePaymentTable
