import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import './styles/App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Home />
    </>
  )
}

export default App
