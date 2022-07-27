import { AxiosResponse } from "axios"

export type userStatusType = "filling_hints" | "waiting" | "playing" | "game_disable"

export interface User {
    id: string
    name: string
    email: string
    year: number
    lifes: number
    hints: { id: string; text: string }[]
    status: userStatusType
    isGameReady: boolean
    partnerCount: number
    img: { type: "Buffer"; data: number[] }
}

export interface Code {
    code: string
    created: Date
    end: Date
}

export interface Hint {
    hints: { userId: 1 | 2; hint: string; isShow: boolean }[]
}

export interface Event {
    location: string
}

export interface Partner {
    partners: { userId: string; name: string; img: { type: "Buffer"; data: number[] } | null }[]
}

export interface sendCode {
    status: "paring_with_partner" | "paring_success" | "paring_fail" | "event"
    event_next_hint?: string
    opened_hint?: string
}

export interface sendCodeBody {
    code: string
}

export interface HintsRequest {
    hints: string[]
}

export interface Hints {
    hints: string[]
}

export type params = "getUser" | "getEvents" | "getCode" | "sendCode" | "getHints" | "openHint" | "getPartners" | "sendHints" | "logout"

export type functionType = {
    [key in params]: ObjectType<key>
}

type ObjectType<T> = T extends "getUser"
    ? () => Promise<AxiosResponse<User, any>>
    : T extends "getEvents"
    ? () => Promise<AxiosResponse<Event, any>>
    : T extends "getCode"
    ? () => Promise<AxiosResponse<Code, any>>
    : T extends "sendCode"
    ? (body: sendCodeBody) => Promise<AxiosResponse<sendCode, any>>
    : T extends "getHints"
    ? () => Promise<AxiosResponse<Hint, any>>
    : T extends "openHint"
    ? () => Promise<AxiosResponse<Hint, any>>
    : T extends "getPartners"
    ? () => Promise<AxiosResponse<Partner, any>>
    : T extends "sendHints"
    ? (body: HintsRequest) => Promise<AxiosResponse<Hint, any>>
    : T extends "logout"
    ? () => Promise<AxiosResponse<any, any>>
    : never

export type parths = "/user" | "/user/event" | "/user/code" | "/user/hints" | "/user/openhint" | "/user/partners" | "/auth/logout"
