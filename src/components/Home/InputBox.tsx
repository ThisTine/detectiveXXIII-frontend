import { AlertIcon, Alert, Box, FormControl, Input, useToast, AlertTitle, AlertDescription, CloseButton, useDisclosure } from "@chakra-ui/react";
import { useState, FC } from "react";

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

const InputBox = () => {

  function handleSubmit(e: any) {
    // checkWithDatabase() return true or false and setAnswer()
    setAnswer(true);
    isCorrect ?
      (toast({
        position: 'top',
        render: () => (
          <AlertResult answer={true} />
        ),
      }))
      :
      (toast({
        position: 'top',
        render: () => (
          <AlertResult answer={false} />
        ),
      }))
    setCode('');
    e.preventDefault();
  }

  const [code, setCode] = useState('');

  // Is the code match with P'รหัส
  const [isCorrect, setAnswer] = useState(false);

  const toast = useToast();

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
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type='submit'>submit ปลอมๆ</button>
      </FormControl>
    </Box>
  );
}

export default InputBox; 