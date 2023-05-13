import ItemListContainer from '@Components/ItemListContainer'
import NavBar from '@Components/NavBar'
import ItemDetailContainer from '@Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from '@Components/Checkout'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
