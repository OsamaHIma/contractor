import axios from "axios";

const BaseUrl = axios.create({
    baseURL: "https://constractor.space/"
})


export default BaseUrl