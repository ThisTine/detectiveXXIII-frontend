import React, { useEffect } from 'react'

const Rerender = () => {
    useEffect(()=>{
        console.log("Not rerender !")
    },[])
  return (
    <div>Rerender</div>
  )
}

export default Rerender