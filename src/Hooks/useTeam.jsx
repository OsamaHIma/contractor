import { useState } from "react";

function useTeam() {
    const [team, setTeam] = useState([]);

    const handleChange = (event) => {
        setTeam([...team, { id: Math.floor(Math.random() * 100), name: event.target.value }]);
    };

    const DeleteItem = (id) => {

        const Filter = team.filter((item) => {
            return item.id !== id
        })

        setTeam(Filter)
    }

    return { team, handleChange, DeleteItem }

}

export default useTeam
