import {  useBoolean, useToast } from "@chakra-ui/react"
import { createContext, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import Loading from "../pages/Loading"
import api from "../hooks/useAxios"
import { User } from "../hooks/useAxiosType"

type userType =  { id: String, username: String, email: String, hints: [], isPlayable: boolean, img: {type:"Buffer",data:number[]}, ingame:{partnercount: number, partnerinfo?:{username: String, image: String}[] } }

const userContext = createContext<{user:userType|null,logout:()=>void}>({user:null,logout:()=>{}})

export const UserContextProvider = (props:any)=>{
  // const axios = useAxios()
  const [isLoading,{off}] = useBoolean(true)
  const [user,setUser] = useState<User| null>(null)
  const navigate = useNavigate()
  const toast = useToast({status:"error"})
  const init = useCallback(async()=>{
    try{
     const data = await api.getUser()
     if(data.data)
     setUser({...data.data})
    }catch(err){
      // navigate("/login",{replace:true})
    }
  },[api,setUser])

  const logout = useCallback(async()=>{
    try{
      await api.logout()
      window.location.reload()
    }catch(err){
      toast({title:"Error"})
    }
  },[])
  
  useEffect(()=>{
    init().finally(off)
  },[init])
  if(isLoading) return <Loading />

  return <userContext.Provider value={{user:user,logout}} {...props} />
}

export default userContext