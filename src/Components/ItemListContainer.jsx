import { useState, useEffect } from 'react'
import { GetProducts, GetProductsByCategory } from '@Utilities/asyncMock'
import Itemlist from './ItemList'
import { useParams } from 'react-router-dom'

const itemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = typeof categoryId !== 'undefined' ? GetProductsByCategory : GetProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
        setLoading(false)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [categoryId])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 py-4">
          <h1 className="h1">Productos</h1>
        </div>
        <div className="col-lg-12">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Itemlist products={products} />
          )}
        </div>
      </div>
    </div>
  )
}

export default itemListContainer
