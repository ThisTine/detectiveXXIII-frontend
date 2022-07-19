import { Flex, VStack, Box, Avatar, Heading, FlexProps, useToast, FormControl, Input } from '@chakra-ui/react'
import { ChangeEvent, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MissionContainer from '../components/Home/MissionContainer'
import userContext from '../context/userContext'
import AppLayout from '../layouts/AppLayout'
import getImageUrl from '../functions/getImageUrl'
import PrimaryButton from '../components/PrimaryButton'
import MissionBox from '../components/Home/MissionBox'

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

  const [code, setCode] = useState('');
  const toast = useToast();
  const toastId = 'status-toast'

  function handleSubmit(e: any) {
    // checkWithDatabase() return true or false
    // let answer: boolean = checkWithDatabase(code);
    let answer: boolean = false;
    if (!toast.isActive(toastId)) {
      answer ?
        (toast({
          id: toastId,
          position: 'top',
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          status: 'success',
          title: 'Matched!',
          description: 'You just matched with your P rahus',
        }))
        :
        (toast({
          id: toastId,
          position: 'top',
          duration: 5000,
          isClosable: true,
          variant: "left-accent",
          status: 'error',
          title: 'Wrong code!',
          description: 'Please try again',
        }))

    }
    setCode('');
    e.preventDefault();
  }

  return (
    <AppLayout nav >
      <Flex {...globalStyle} >
        <VStack width='100%'>
          <Heading color="#A680FF" mb="12">Guess your P'รหัส</Heading>
          <MissionContainer
            Button={<PrimaryButton type='submit' onSubmit={(e) => handleSubmit(e)} >Submit</PrimaryButton>}
            MissionBox={<MissionBox boxStyle={boxStyle}>{mission}</MissionBox>}
            htmlAs='form'
          >
            <Box {...globalStyle} gap='10' >
              <Avatar size={"2xl"} src={getImageUrl(user?.img.data)} />
              <Box>
                <FormControl as='form' onSubmit={(e) => handleSubmit(e)} borderColor={"#A37BFF"} >
                  <Input
                    id='CODE'
                    width='auto'
                    p={6}
                    bg='whiteAlpha.500'
                    boxShadow='lg'
                    borderRadius={60}
                    placeholder='PUT CODE HERE'
                    textAlign={['center']}
                    _placeholder={{
                      color: '#AD89FF'
                    }}
                    textColor='#AD89FF'
                    value={searchParams.get('code') as string}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                  />
                </FormControl>
              </Box>
            </Box>
          </MissionContainer>
        </VStack>
      </Flex>
    </AppLayout>
  )
}

export default Home