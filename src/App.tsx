import { Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./context/userContext"
import Home from "./pages/Home"
import Login from "./pages/Login"


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </UserContextProvider>


  )
}

export default App
