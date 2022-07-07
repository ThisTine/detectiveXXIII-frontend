import { useState } from "react"
import mockimg from '../mockup/image.json'

type partners = {
  count: 1 | 2,
  user: {name:string,img:{type:"Buffer",data:number[]}}[]
}

const Finish = () => {
  const [partners] = useState<partners>({count:2,user:[{name:"Sittichok Ouamsiri",img:{type:"Buffer",data:mockimg}}]})
  return (
    <div>Finish</div>
  )
}

export default Finish