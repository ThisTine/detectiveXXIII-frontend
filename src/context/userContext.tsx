import { useBoolean, useToast } from "@chakra-ui/react"
import { createContext, useCallback, useEffect, useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../pages/Loading"
import api from "../hooks/useAxios"
import { Partner, User, userStatusType } from "../hooks/useAxiosType"

const userContext = createContext<{
    user: User
    partner: Partner
    logout: () => void
    mutateLife: (amount: number) => void
    changeStatus: (status: userStatusType) => void
    init: () => Promise<void>
    initPartners: () => Promise<Partner>
}>({
    user: null as any,
    partner: { partners: [] },
    logout: () => {},
    mutateLife: (amount) => {},
    changeStatus: (status) => {},
    init: async () => {},
    initPartners: async () => ({} as any),
})

export const UserContextProvider = (props: any) => {
    const [isLoading, { off }] = useBoolean(true)
    const [user, setUser] = useState<User | null>(null)
    const [partners, setPartners] = useState<Partner>({ partners: [] })
    const navigate = useNavigate()
    const toast = useToast({ status: "error" })
    const initPartners: () => Promise<Partner> = async () => {
        try {
            const { data: partners } = await api.getPartners()
            if (partners) {
                setPartners({ ...partners })
                return { ...partners }
            }
        } catch (err) {}
        return { partners: [] }
    }
    const init = useCallback(async () => {
        try {
            const { data } = await api.getUser()
            let partnerslist: Partner | null = null
            try {
                const { data: partners } = await api.getPartners()
                if (partners) partnerslist = { ...partners }
            } catch (err) {
                partnerslist = null
            }

            if (partnerslist) {
                setPartners(partnerslist)
            }
            if (data) {
                setUser({ ...data })
                if (data.partnerCount > 1 && partnerslist?.partners.length === data.partnerCount - 1) {
                    return navigate("/finish", { replace: true })
                }
                if (data.status === "filling_hints") {
                    return navigate("/setup", { replace: true })
                }
                if (data.status === "waiting" || data.status === "game_disable") {
                    return navigate("/waiting", { replace: true })
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

    const changeStatus = (status: userStatusType) => {
        setUser((val) => (val ? { ...val, status } : null))
    }

    const mutateLife = (amount: number) => {
        setUser((val) => (val ? { ...val, lifes: val.lifes - amount } : null))
    }
    useLayoutEffect(() => {
        if (user && user.partnerCount > 1 && partners?.partners.length === user.partnerCount - 1) {
            return navigate("/finish", { replace: true })
        }
    }, [navigate, user, partners])
    useEffect(() => {
        init().finally(off)
    }, [init])

    if (isLoading) return <Loading />

    // if (!user) return <Unauthorized />

    return <userContext.Provider value={{ user: user, logout, mutateLife, changeStatus, init, partner: partners, initPartners }} {...props} />
}

export default userContext
