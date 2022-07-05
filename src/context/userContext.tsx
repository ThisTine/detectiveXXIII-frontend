import {  useBoolean, useToast } from "@chakra-ui/react"
import { createContext, memo, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import Loading from "../pages/Loading"

type userType =  { id: String, username: String, email: String, hints: [], isPlayable: boolean, image: String, ingame:{partnercount: number, partnerinfo?:{username: String, image: String}[] } }

const userContext = createContext<{user:userType|null,logout:()=>void}>({user:null,logout:()=>{}})

export const UserContextProvider = (props:any)=>{
  const axios = useAxios()
  const [isLoading,{off}] = useBoolean(true)
  const [user,setUser] = useState<userType| null>(null)
  const navigate = useNavigate()
  const toast = useToast({status:"error"})
  const init = useCallback(async()=>{
    try{
     const {data} = await axios.get("/user/init")
     setUser({...data})
    }catch(err){
      navigate("/login",{replace:true})
    }
  },[])

  const logout = useCallback(async()=>{
    try{
      await axios.get("/auth/logout")
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