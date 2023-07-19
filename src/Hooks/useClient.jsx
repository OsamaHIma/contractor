
function useClient() {

    const HandleAddOpenClient = () => {

        document.querySelector(".BigMain").setAttribute("client", true)


    }
    const HandleAddCloseClient = () => {

        document.querySelector(".BigMain").setAttribute("client", false)


    }

    return { HandleAddOpenClient, HandleAddCloseClient }

}

export default useClient
