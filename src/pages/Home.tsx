import { Box, Avatar, Button, Heading } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import BoxContainer from '../components/BoxContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'
import getImageUrl from '../functions/getImageUrl'
import PrimaryButton from '../components/PrimaryButton'
import MissionBox from '../components/MissionBox'

const Home = () => {
  const [mission] = useState<string>("go to Lx Build")
  const { logout, user } = useContext(userContext)
  return (
    <AppLayout nav >
      <BoxContainer
        Button={<PrimaryButton onClick={logout} >Logout</PrimaryButton>}
        MissionBox={<MissionBox>Mission</MissionBox>}
      >
        <Box display='flex' flexDirection='column' alignItems='center' >
          <Avatar size={"2xl"} src={getImageUrl(user?.img.data)} />
          <Heading>Home</Heading>
        </Box>
      </BoxContainer>
    </AppLayout>
  )
}

export default Home