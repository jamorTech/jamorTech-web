import axios from "axios";

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    // baseURL: "https://fake-json-api.mock.beeceptor.com"
    withCredentials: true,
})

export const axiosPrivate = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
})