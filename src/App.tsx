import { Container, Heading } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <Container w="100%" maxW={"container.lg"}>
      <Heading>Hello from Frontend {import.meta.env.VITE_MODE}</Heading>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='login' element={<Login/>}/>
      </Routes>
    </Container>
  )
}

export default App
