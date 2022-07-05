import { Avatar, Button, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import BoxContainer from '../components/BoxContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'
import { Buffer } from "buffer";

const Home = () => {
  const {logout,user} = useContext(userContext)
  console.log(user)
  return (
    <AppLayout>
      <BoxContainer>
      <Avatar size={"2xl"} src={"data:image/jpg;base64,"+Buffer.from(user?.img.data || []).toString("base64")} />
      <Heading>Home</Heading>
      <Button onClick={logout} >Logout</Button>
      </BoxContainer>
    </AppLayout>
  )
}

export default Home