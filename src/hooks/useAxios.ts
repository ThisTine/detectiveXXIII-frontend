import axios from "axios";
import { Code, Event, functionType, Hint, parths, Partner, sendCode, sendCodeBody, User } from "./useAxiosType";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    withCredentials: true})
 
const api:functionType = {
    getCode: ()=>axiosInstance.get<Code>(("/user/code" as parths)),
    getEvents: ()=>axiosInstance.get<Event>(("/user/event" as parths)),
    getHints: ()=>axiosInstance.get<Hint>(("/user/hints" as parths)),
    getPartners: ()=>axiosInstance.get<Partner>(("/user/partners" as parths)),
    getUser: ()=>axiosInstance.get<User>(("/user" as parths)),
    openHint: ()=>axiosInstance.get<Hint>(("/user/openhint" as parths)),
    sendCode: (body)=>axiosInstance.post<sendCode>(("/user/code" as parths),{data:{...body}}),
    sendHints: (body)=>axiosInstance.post<Hint>(("/user/hints" as parths),{data:{...body}}),
    logout: ()=>axiosInstance.get<any>(("/auth/logout" as parths)),
}

export default api
