import React, { useEffect, useLayoutEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import AppLayout from "../layouts/AppLayout";
import { Text, Box, Center, Flex, Image } from "@chakra-ui/react";
import dayjs from "dayjs";

type code = {
  code: string;
  end: dayjs.Dayjs;
};

const Code = () => {
  const [code, setCode] = useState<code>({
    code: "X23AD",
    end: dayjs().add(1, "m"),
  });

  const countdown = () => {
    const now = dayjs();
    return code.end.diff(now, "s");
  };
  const [time, setTime] = useState(countdown());

  useLayoutEffect(() => {
    setTime(countdown());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const timeLeft = countdown();
      if (now.isAfter(code.end)) {
        setCode({
          code: "X23AD",
          end: dayjs().add(1, "m"),
        });
      } else {
        setTime(timeLeft);
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
                  src={`https://chart.googleapis.com/chart?chs=177x177&cht=qr&chl=${
                    import.meta.env.VITE_WEBURL
                  }?code=${code.code}&chld=H|1`}
                  borderRadius={30}
                  backgroundColor="rgba(255, 255, 255, 0.86)"
                  boxShadow="0px 4px 11px rgba(0, 0, 0, 0.25)"
                  backdropBlur="blur(50px)"
                  width="269px"
                  height="255px"
                  padding="10px"
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
