import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaLock, FaCheck } from "react-icons/fa";
function HintCards({hints }:any) {
  if(hints.isShow){
    return(
      <Box
      minW="300px"
      width={{ base: "50%", sm: "80%" }}
      boxShadow="md"
      p="4"
      rounded="lg"
      bg="white"
    >
      <Flex alignItems="center" justifyContent="space-between" gap="2">
        <Flex alignItems="center">
          <Flex
            bg="#C6F6D5"
            width="50px"
            height="50px"
            rounded="lg"
            justifyContent="center"
            alignItems="center"
            marginRight={3}
          >
            <Icon as={FaCheck}></Icon>
          </Flex>
          <Flex flexDirection="column">
            <Heading as="h3" size="sm" fontWeight="semibold">
              HINT {hints.id}
            </Heading>
            <UnorderedList>
              <ListItem color="#4f4f4f">{hints.hint}</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Badge ml="1" colorScheme="green" variant="outline">
          Unlocked
        </Badge>
      </Flex>
    </Box>
    );
  }
  //is Show is False
  else{
    return(
      <Box
      minW="300px"
      width={{ base: "50%", sm: "80%" }}
      boxShadow="md"
      p="4"
      rounded="lg"
      bg="white"
    >
      <Flex alignItems="center" justifyContent="space-between" gap="2">
        <Flex alignItems="center">
          <Flex
            bg="#EBDCFC"
            width="50px"
            height="50px"
            rounded="lg"
            justifyContent="center"
            alignItems="center"
            marginRight={3}
          >
            <Icon as={FaLock}></Icon>
          </Flex>
          <Flex flexDirection="column">
            <Heading as="h3" size="sm" fontWeight="semibold">
              HINT {hints.id}
            </Heading>
            <UnorderedList>
              <ListItem color="#4f4f4f" filter="auto" blur="10px">{hints.hint}</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Badge ml="1" colorScheme="red" variant="outline">
          Locked
        </Badge>
      </Flex>
    </Box>
    );
  }
}
export default HintCards;
