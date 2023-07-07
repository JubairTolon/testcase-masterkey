import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import './styles/App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://api.hiring.masterkey.tech/api/v1/products"
        )
      ).json();

      setData(data?.products[0].productData);
    };
    dataFetch();
  }, []);


  return (
    <>
      <Navbar products={data} />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Home products={data} />
    </>
  )
}

export default App
