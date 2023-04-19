import { useState } from 'react'
import { GetProducts } from '../../asyncMock'
import Itemlist from '../ItemList/ItemList'

const itemListContainer = ({ greeting }) => {
  const [Products, setProducts] = useState([])

  useState(() => {
    GetProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [])

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <Itemlist products={Products} />
    </div>
  )
}

export default itemListContainer
