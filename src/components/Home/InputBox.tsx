import { Box, FormControl, Input, useToast } from "@chakra-ui/react";
import { useState, FC } from "react";

const InputBox: FC<{ qCode: string | null }> = ({ qCode }) => {

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
          value={qCode? qCode : code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type='submit' onSubmit={(e) => handleSubmit(e)} >submit ปลอมๆ</button>
      </FormControl>
    </Box>
  );
}

export default InputBox; 