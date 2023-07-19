
function useRequest() {
    const HandleAddOpenProject = () => {
        document.querySelector(".BigMain").setAttribute("Request", true)
    }

    const HandleAddCloseProject = () => {

        document.querySelector(".BigMain").setAttribute("Request", false)
    }

    return {HandleAddOpenProject ,HandleAddCloseProject }
}

export default useRequest
