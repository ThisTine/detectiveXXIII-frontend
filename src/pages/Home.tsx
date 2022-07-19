import { Avatar, Button, Heading } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import BoxContainer from '../components/BoxContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'
import getImageUrl from '../functions/getImageUrl'
import PrimaryButton from '../components/PrimaryButton'



const Home = () => {
  const [mission] = useState<string>("go to Lx Build")
  const {logout,user} = useContext(userContext)
  return (
    <AppLayout nav={true} >
      <BoxContainer Button={<PrimaryButton onClick={logout} isDisabled={true} >Logout</PrimaryButton>} >
      <Avatar size={"2xl"} src={getImageUrl(user?.img.data)} />
      <Heading>Home</Heading>
      
      </BoxContainer>
    </AppLayout>
  )
}

export default Home