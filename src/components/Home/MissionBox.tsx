import { Text, Heading, VStack, Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react'
import { TbZoomQuestion } from 'react-icons/tb'


const MissionBox: FC<{ children: ReactNode, boxStyle: BoxProps }> = ({ children, boxStyle }) => {

  return (
    <Box
      {...boxStyle}
      transform={"translateY(50%)"}
      display='flex'
      justifyContent='flex-start'
    >
      <Box
        backgroundColor='#EBDCFC'
        rounded='lg'
        width='50px'
        height='50px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <TbZoomQuestion color='#A680FF' size='30px' />
      </Box>
      <VStack ml="6">
        <Heading as='h5' size="sm">New Mission</Heading>
        <Text>
          {children}
        </Text>
      </VStack>
    </Box>
  );
}

export default MissionBox;