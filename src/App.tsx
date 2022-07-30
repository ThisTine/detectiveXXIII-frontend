import { useLayoutEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./context/userContext"
import Code from "./pages/Code"
import Finish from "./pages/Finish"
import Hints from "./pages/Hints"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Notfound from "./pages/NotFound"
import Setup from "./pages/Setup"
import Waiting from "./pages/Waiting"

function App() {
    useLayoutEffect(() => {
        document.title = "DETECTIVEXXIII-staging"
    }, [])
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/waiting" element={<Waiting />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/code" element={<Code />} />
                <Route path="/hints" element={<Hints />} />
                <Route path="/finish" element={<Finish />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </UserContextProvider>
    )
}

export default App
