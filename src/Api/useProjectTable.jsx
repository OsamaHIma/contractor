import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataAsync } from "../Redux/Slices/getData/getDataSlice";
function useProjectTable() {
    function createData(ID, Company, Budget, end_time, Compeletion) {

        return { ID, Company, Budget, end_time, Compeletion };
    }

    const dispatch = useDispatch()

    const [project, setProject] = useState([])


    useEffect(() => {
        dispatch(getDataAsync("api/v1/project"))
    }, [dispatch])

    const data = useSelector(state => state.getDataSlice.data)


    useEffect(() => {
        if (data?.projects) {
            setProject(data.projects)
        }
    }, [data])

    const rows = [
        ...project.map((item) => {
            return(
                createData(
                <div className="textColor " style={{ fontSize: "16px" }}>#{item.id}</div>
                ,
                <div className="textColor " style={{ fontSize: "16px" }}>#{item.name}</div>
                ,
                <div className="textColor " style={{ fontSize: "16px" }}>{item.budget}</div>
                ,
                <div className="textColor " style={{ fontSize: "16px" }}>{JSON.stringify(item.end_time).slice(1,11)}</div>
                ,
                <div className='d-flex justify-content-start align-items-center' >
                    <div className="progress" style={{ width: "80%", height: "9px", background: "rgba(225, 225, 225, 0.3)" }}>
                        <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: `${JSON.stringify(item.budget).slice(0,2)}%`, background: "#6CB8E7" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span style={{ marginLeft: "7px" }}>{JSON.stringify(item.budget).slice(0,2)}%</span>
                </div>
            ))
        })
        
    ];

    const columns = [
        { id: 'ID', label: 'ID' },
        { id: 'Company', label: 'Name project' },
        {
            id: 'Budget',
            label: 'Budget',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'end_time',
            label: 'End time',
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'Compeletion',
            label: 'Compeletion',
            align: 'right',
            format: (value) => value.toFixed(2),
        },
    ];

    return { rows, columns }

}

export default useProjectTable
