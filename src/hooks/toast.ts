import { ToastId, useToast,UseToastOptions  } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";

const defaultToast:UseToastOptions = {
    position:"top-right",
    isClosable:true
}

type keys = "info" | "warning" | "success" | "error" | "loading"

type toastsType = { [key in keys]: (title:string,options? :UseToastOptions)=> ToastId } 

const allstatus:keys[] = ["info" ,"warning" , "success" , "error" , "loading"]

export const useAppToast = (options? :UseToastOptions )=>{
    const toast = useToast({...defaultToast,...options})
    const [toasts,setToasts] = useState<toastsType>({} as any)
    useLayoutEffect(()=>{
        allstatus.forEach((key:any)=> setToasts((val)=>({...val,[key]:(title:string,options? :UseToastOptions)=> toast({title,status:key,...options})})) )
    },[setToasts,allstatus])


    return (toasts)
}


// use by 
// import {useAppToast} from '/hooks/toast'
// const toast = useAppToast()
// const onClick = ()=>{ toast.error("Error !!!") }