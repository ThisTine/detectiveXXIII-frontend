import { Flex, VStack, Box, Avatar, Heading, FlexProps, useToast, FormControl, Input, useBoolean } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, FormEventHandler, useCallback, useContext, useLayoutEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import MissionContainer from "../components/Home/MissionContainer"
import userContext from "../context/userContext"
import AppLayout from "../layouts/AppLayout"
import getImageUrl from "../functions/getImageUrl"
import PrimaryButton from "../components/PrimaryButton"
import MissionBox from "../components/Home/MissionBox"
import { useAppToast } from "../hooks/toast"
import api from "../hooks/useAxios"
import { AxiosError } from "axios"
import ParingModal from "../components/Modal/ParingModal"
import HintsModal from "../components/Modal/HintsModal"

const boxStyle = {
    shadow: "lg",
    bg: "#FFFFFF",
    w: "100%",
    rounded: "3xl",
    display: "flex",
    justifyContent: "center",
    p: 3,
    maxW: "lg",
}

const globalStyle: FlexProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
}

const Home = () => {
    const [mission, setMission] = useState<string | null>(null)
    const { user, mutateLife, initPartners } = useContext(userContext)
    const [searchParams] = useSearchParams()
    const [hints, sethints] = useState<string[]>([])
    const [isLoading, { on, off }] = useBoolean()
    const [modal, setModal] = useState<"paring_success" | "paring_fail" | "event" | null>(null)
    const navigate = useNavigate()
    const [code, setCode] = useState("")
    const toast = useAppToast()

    const getMission = useCallback(async () => {
        try {
            const {
                data: { location },
            } = await api.getEvents()
            if (location) {
                setMission(location)
            } else {
                setMission(null)
            }
        } catch (err) {}
    }, [])

    useLayoutEffect(() => {
        getMission()
        localStorage.removeItem("hints")
    }, [])
    useLayoutEffect(() => {
        setCode(searchParams.get("code") || "")
    }, [searchParams])

    const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        on()
        try {
            if (!code) return toast.error("Code is requried")
            const {
                data: { status, event_next_hint, opened_hint },
            } = await api.sendCode({ code })
            if (status === "paring_fail") {
                setModal("paring_fail")
                mutateLife(1)
            }
            if (status == "paring_success") {
                const { partners } = await initPartners()
                if (user.partnerCount === partners.length + 1) {
                    navigate("/finish", { replace: true })
                } else {
                    setModal("paring_success")
                }
            }
            if (status === "event") {
                if (event_next_hint) {
                    setMission(event_next_hint || "")
                }
                if (opened_hint) {
                    sethints([...opened_hint])
                    setModal("event")
                }
                setMission(null)
            }
            setCode("")
            off()
        } catch (error: any) {
            console.log(error)
            const err = error as AxiosError
            toast.error("Error", { description: err.response?.data as string })
            off()
        }
    }

    return (
        <AppLayout nav as={"form"} onSubmit={handleSubmit}>
            <ParingModal isOpen={modal === "paring_fail"} onClose={() => setModal(null)} />
            <ParingModal isOpen={modal === "paring_success"} onClose={() => setModal(null)} isSuccess />
            <HintsModal isOpen={modal === "event"} onClose={() => setModal(null)} hints={hints} />
            <Flex {...globalStyle}>
                <VStack width="100%">
                    <Heading color="#A680FF" mb="12">
                        Guess your P'รหัส
                    </Heading>
                    <MissionContainer
                        Button={
                            <PrimaryButton type="submit" isDisabled={!code} isLoading={isLoading}>
                                Submit
                            </PrimaryButton>
                        }
                        MissionBox={mission && <MissionBox boxStyle={boxStyle}>{mission}</MissionBox>}
                    >
                        <Box {...globalStyle} gap="10" pt={!mission ? 20 : 0}>
                            <Avatar size={"2xl"} src={getImageUrl(user.img?.data)} />
                            <Box>
                                <FormControl borderColor={"#A37BFF"}>
                                    <Input
                                        autoComplete="off"
                                        id="CODE"
                                        width="auto"
                                        p={6}
                                        bg="whiteAlpha.500"
                                        boxShadow="lg"
                                        borderRadius={60}
                                        placeholder="PUT CODE HERE"
                                        textAlign={["center"]}
                                        _placeholder={{
                                            color: "#AD89FF",
                                        }}
                                        textColor="#AD89FF"
                                        value={code}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
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
