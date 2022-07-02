import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Soon from './pages/Soon'

function App() {

  return (
    <Container w="100%" maxW={"container.lg"}>
      {/* <Routes>
        <Route path='/' element={<Soon/>}  />
      </Routes> */}
      <Soon />
    </Container>
  )
}

export default App
