import { Box, Heading, HStack } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import NavBarData from './NavBarData'

const NavBarButton:FC<{children:ReactNode,to:string}> = ({children,to})=>{
    return <HStack justifyContent={"center"} p={4} flex={1}><Link  to={to} style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Heading color="white" size={"2xl"} textAlign={"center"}>{children}</Heading></Link></HStack>
}

const NavBarMobile = () => {
  return (
    <HStack w="100%" pos="fixed" bottom={0} justifyContent="flex-end" bg="#BCA1FF" border="1px solid" borderColor={"white"} borderBottom="none" borderTopRadius={"3xl"} >
        {NavBarData.map(({Component,title,to})=><NavBarButton key={title} to={to} ><Component/></NavBarButton>)}
        
    </HStack>
  )
}

export default NavBarMobile