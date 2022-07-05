import { Box, Button, Heading, useBreakpointValue,  VStack } from '@chakra-ui/react'
import AppLayout from '../layouts/AppLayout'
import {BsMicrosoft} from 'react-icons/bs'
import { useContext } from 'react'
import userContext from '../context/userContext'
import { Navigate } from 'react-router-dom'
const Login = () => {
  const isWeb = useBreakpointValue({xs:false,lg:true})
  const {user} = useContext(userContext)
  console.log(user)
  if(user){
    return <Navigate to="/" replace={true} />
  }
  return (
    <AppLayout maxW={"container.sm"} >
      <VStack spacing={10} p={10} minH="100px" >
      <Heading textAlign={"center"} fontWeight={500} color="mainBtn.700" textTransform={"uppercase"} >Login{isWeb && "/Register"}</Heading>
      <Button colorScheme={"mainBtn"} color="white" size="lg" rounded={"full"} as="a" href={`${import.meta.env.VITE_BASEURL}/auth`} > <Box mr={5} ><BsMicrosoft/></Box> Login with Microsoft</Button>
      </VStack>
    </AppLayout>
  )
}

export default Login