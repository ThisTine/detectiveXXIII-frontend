import React, { useState } from 'react'
import { useAppToast } from '../hooks/toast'

type code = {
    code: string ,
    end: Date
}

const Code = () => {
    const [code] = useState<code>({code:"asdsdX23AD",end: new Date(new Date().getTime() + 1*60000)})
    const toast = useAppToast()
    const onClick = ()=>{
      toast.loading("Error !")
    }
  return (
    <div>
    <img onClick={onClick} src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://detectivexiii.thistine.com?code=${code.code}&choe=UTF-8`} />  
    Code</div>
  )
}

export default Code