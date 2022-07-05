import { Button, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import BoxContainer from '../components/BoxContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'

const Home = () => {
  const {logout} = useContext(userContext)
  return (
    <AppLayout>
      <BoxContainer>
      <Heading>Home</Heading>
      <Button onClick={logout} >Logout</Button>
      </BoxContainer>
    </AppLayout>
  )
}

export default Home