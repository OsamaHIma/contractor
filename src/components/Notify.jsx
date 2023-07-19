import { toast } from 'react-toastify'

function Notify(msg, type) {

    if (type === "warn") {
        toast.warn(msg)
    } else if (type === "success") {
        toast.success(msg)
    } else if (type === "error") {
        toast.error(msg)
    } else if (type === "warning") {
        toast.warning(msg)
    }
    
}

export default Notify
