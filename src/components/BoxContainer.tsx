import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

const BoxContainer:FC<{children:ReactNode}> = ({children}) => {
  return (
    <Box border="1px solid" borderColor={"gray.200"} padding={5} borderRadius={5}>
        {children}
    </Box>
  )
}

export default BoxContainer