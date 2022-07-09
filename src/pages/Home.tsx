import { Flex, VStack, Box, Avatar, Heading, FlexProps } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MissionContainer from '../components/Home/MissionContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'
import getImageUrl from '../functions/getImageUrl'
import PrimaryButton from '../components/PrimaryButton'
import MissionBox from '../components/Home/MissionBox'
import InputBox from '../components/Home/InputBox'

const Home = () => {
  const [mission] = useState<string>("go to Lx Build")
  const { logout, user } = useContext(userContext)
  const [searchParams, setSearchParams] = useSearchParams();

  const boxStyle = {
    shadow: "lg",
    bg: "#FFFFFF",
    w: "100%",
    rounded: "3xl",
    display: "flex",
    justifyContent: "center",
    p: 3,
    maxW: 'lg'
  }

  const globalStyle: FlexProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  }

  return (
    <AppLayout nav >
      <Flex {...globalStyle} >
        <VStack width='100%'>
          <Heading color="#A680FF" mb="12">Guess your P'รหัส</Heading>
          <MissionContainer
            Button={<PrimaryButton onClick={logout} >Submit</PrimaryButton>}
            MissionBox={<MissionBox boxStyle={boxStyle}>{mission}</MissionBox>}
          >
            <Box {...globalStyle} gap='10' >
              <Avatar size={"2xl"} src={getImageUrl(user?.img.data)} />
              <InputBox code={searchParams.get('code')} />
            </Box>
          </MissionContainer>
        </VStack>
      </Flex>
    </AppLayout>
  )
}

export default Home