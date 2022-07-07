import {  Container, Heading, HStack, Tooltip, VStack } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import NavBarData from './NavBarData'
import {AiFillHeart} from 'react-icons/ai'

const ButtonIcon:FC<{children:ReactNode,to:string,title:string}> = ({children,to,title})=>{
  return <Link {...{to}} ><Tooltip label={title} aria-label={title} ><Heading color="#A680FF" cursor={"pointer"} transition="0.25s" _hover={{color:"#9466FF"}} size={"xl"} >{children}</Heading>
  </Tooltip></Link>
}

const NavBarDesktop:FC<{isMobile:boolean}> = ({isMobile}) => {
  return (
    <HStack w="100%" pos="fixed" top={0} justifyContent="flex-end" >
      <Container w="100%" maxW={"container.xl"} pt={10} >
        <VStack w="100%" alignItems={"flex-end"} gap={5} >
      {!isMobile && <HStack  gap={8}> 
      {NavBarData.map(({Component,to,title})=><ButtonIcon to={to} title={title} key={title} > <Component/>  </ButtonIcon>)}
        </HStack>}
        <HStack bg="white" gap={2} p={2} px={3} shadow="lg" rounded="2xl"><Heading size={"lg"} color="#F56565" ><AiFillHeart/></Heading><Heading size={"lg"} color="#A680FF" >5</Heading></HStack>
        </VStack>

      </Container>
    </HStack>
  )
}

export default NavBarDesktop