import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { GetProductsById } from '@Utilities/asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    GetProductsById(Number(itemId))
      .then(response => {
        setProducts(response)
        setLoading(false)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemDetail {...products} />
      )}
    </div>
  )
}

export default ItemDetailContainer
