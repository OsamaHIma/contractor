import { useState } from 'react'

function useSettings() {

    const [open, setOpen] = useState(false);



    const handleClickOpen = () => {
        setOpen(true);
        console.log(open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return { open, handleClose, handleClickOpen }
}

export default useSettings
