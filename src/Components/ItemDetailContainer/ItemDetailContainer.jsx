import { useState, useEffect } from 'react'
import { GetProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [Products, setProducts] = useState(null)
  useEffect(() => {
    GetProductsById('1')
      .then(Response => {
        setProducts(Response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...Products} />
    </div>
  )
}

export default ItemDetailContainer
