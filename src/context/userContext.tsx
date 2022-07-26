import { Heading, useBoolean, useToast } from "@chakra-ui/react"
import { createContext, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import Loading from "../pages/Loading"
import api from "../hooks/useAxios"
import { User } from "../hooks/useAxiosType"
import Unauthorized from "../pages/Unauthorized"

type userType = {
    id: String
    username: String
    email: String
    hints: []
    isPlayable: boolean
    img: { type: "Buffer"; data: number[] }
    ingame: { partnercount: number; partnerinfo?: { username: String; image: String }[] }
}

const userContext = createContext<{ user: User | null; logout: () => void; mutateLife: (amount: number) => void }>({
    user: null,
    logout: () => {},
    mutateLife: (amount) => {},
})

export const UserContextProvider = (props: any) => {
    const [isLoading, { off }] = useBoolean(true)
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()
    const toast = useToast({ status: "error" })
    const init = useCallback(async () => {
        try {
            const { data } = await api.getUser()
            if (data) {
                setUser({ ...data })
                if (!data.hints || data.hints.length !== 10) {
                    navigate("/setup", { replace: true })
                }
                if ((data.hints.length === 10 && data.partnerCount <= 1) || (data.hints.length === 10 && !data.isGameReady)) {
                    navigate("/waiting", { replace: true })
                }
            }
        } catch (err) {
            navigate("/login", { replace: true })
        }
    }, [api, setUser])

    const logout = useCallback(async () => {
        try {
            await api.logout()
            window.location.reload()
        } catch (err) {
            toast({ title: "Error" })
        }
    }, [])

    const mutateLife = (amount: number) => {
        setUser((val) => (val ? { ...val, lifes: val.lifes - amount } : null))
    }

    useEffect(() => {
        init().finally(off)
    }, [init])
    if (isLoading) return <Loading />

    // if (!user) return <Unauthorized />

    return <userContext.Provider value={{ user: user, logout, mutateLife }} {...props} />
}

export default userContext
