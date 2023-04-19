import { useState, useEffect } from 'react'
import { GetProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [Products, setProducts] = useState(null)
  const { itemId } = useParams
  useEffect(() => {
    GetProductsById(itemId)
      .then(Response => {
        setProducts(Response)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...Products} />
    </div>
  )
}

export default ItemDetailContainer
