import {
    Heading,
    Box,
    UnorderedList,
    ListItem,
    Icon,
    Flex,
    Badge,
    Skeleton,
  } from "@chakra-ui/react";
  import { FaLock, FaCheck } from "react-icons/fa";
  function HintCardsLoading() {
    return (
      <Box
        minW="300px"
        width={{ base: "50%", sm: "80%" }}
        boxShadow="md"
        p="4"
        rounded="lg"
        bg="white"
      >
        <Flex alignItems="center" justifyContent="space-between" gap="2" w={"100%"}>
          <Flex alignItems="center" w={"100%"}>
            <Flex
              width="50px"
              height="50px"
              rounded="lg"
              justifyContent="center"
              alignItems="center"
              marginRight={3}
            >
              <Skeleton w={10} height={8}/>
            </Flex>
            <Flex flexDirection="column" w={"100%"}>
                <Skeleton w={"100%"} height={8}/>
              <UnorderedList mt={3}>
                <ListItem
                  color="#4f4f4f"
                  filter="auto"
                >
                  <Skeleton w={"100%"} height={5}/>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Badge
            ml="1"
          >
            <Skeleton w={8} height={8}/>
          </Badge>
        </Flex>
      </Box>
    );
  }
  export default HintCardsLoading;
  