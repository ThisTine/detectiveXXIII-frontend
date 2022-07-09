import { AlertIcon, Alert, Box, FormControl, Input, useToast, AlertTitle, AlertDescription, CloseButton, useDisclosure } from "@chakra-ui/react";
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
          render: () => (
            <AlertResult answer={true} />
          ),
        }))
        :
        (toast({
          id: toastId,
          position: 'top',
          render: () => (
            <AlertResult answer={false} />
          ),
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
          placeholder={qCode ? qCode : 'PUT CODE HERE'}
          textAlign={['center']}
          _placeholder={{
            color: '#AD89FF'
          }}
          textColor='#AD89FF'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type='submit' onSubmit={(e) => handleSubmit(e)} >submit ปลอมๆ</button>
      </FormControl>
    </Box>
  );
}

const AlertResult: FC<{ answer: boolean }> = ({ answer }) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    <Alert
      status={answer ? "success" : "error"}
      variant='left-accent'
      rounded='md'
    >
      <AlertIcon />
      <Box>
        <AlertTitle>{answer ? "You matched!" : "Wrong!"}</AlertTitle>
        <AlertDescription>{answer ? "You matched with your P rahus." : "Your code is not correct."}</AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-10}
        top={-1}
        onClick={onClose}
      />
    </Alert >
  );
}

export default InputBox; 