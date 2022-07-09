import { Box, Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

const PrimaryButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      bgColor={"rgba(163,123,255,0.86)"}
      size="lg"
      color="white"
      _hover={{ bgColor: "rgba(147,101,255,0.86)" }}
      fontSize="xl"
      _focus={{ bgColor: "rgba(147,101,255,1)" }}
      rounded="full"
      transform={"scale(1.2)"}
      {...props}
    >
      <Box p={5}>{props.children}</Box>
    </Button>
  )
}

export default PrimaryButton