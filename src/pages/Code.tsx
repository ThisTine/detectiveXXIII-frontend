import React, { useEffect, useLayoutEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import AppLayout from "../layouts/AppLayout";
import { Text, Box, Center, Flex, Image } from "@chakra-ui/react";

type code = {
  code: string;
  end: Date;
};

const Code = () => {
  const [code, setCode] = useState<code>({
    code: "X23AD",
    end: new Date(new Date().getTime() + 1 * 60000),
  });

  const countdownDate = code.end.getTime();
  const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return seconds;
  };
  const [time, setTime] = useState(countdown());

  useLayoutEffect(() => {
    setTime(countdown());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown() <= 0) {
        setCode({
          code: "X23AD",
          end: new Date(new Date().getTime() + 1 * 60000),
        });
      } else {
        setTime(countdown());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppLayout nav>
      <Flex width="396px">
        <BoxContainer>
          <Center display="flex" flexDirection="column">
            <>
              <Box
                textAlign="center"
                background="rgba(255, 255, 255, 0.8)"
                border="0.5px solid rgba(0, 0, 0, 0.23)"
                boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                backdropBlur="50px"
                borderRadius="30px"
                color="#AD89FF"
                width="64px"
                height="37px"
                py={1}
                marginBottom="31px"
              >
                {time} s
              </Box>
              <Center>
                <Image
                  src={`https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${code.code}&chld=H|1`}
                  borderRadius={30}
                  backgroundColor="rgba(255, 255, 255, 0.86)"
                  boxShadow="0px 4px 11px rgba(0, 0, 0, 0.25)"
                  backdropBlur="blur(50px)"
                  width="269px"
                  height="255px"
                />
              </Center>
              <Center>
                <Box
                  backgroundColor="#FFFFFF"
                  border="0.5px solid rgba(0, 0, 0, 0.23)"
                  boxShadow="0px 4px 15px rgba(0, 0, 0, 0.25)"
                  backdropBlur="blur(50px)"
                  borderRadius="15px"
                  mt="49px"
                  width="176px"
                  height="53"
                  py={3}
                >
                  <Text
                    textAlign="center"
                    color="#AD89FF"
                    fontWeight={500}
                    fontSize="17px"
                    textTransform="uppercase"
                  >
                    {code.code}
                  </Text>
                </Box>
              </Center>
            </>
          </Center>
        </BoxContainer>
      </Flex>
    </AppLayout>
  );
};

export default Code;
