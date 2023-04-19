import { useState, useEffect } from 'react'
import { GetProducts, GetProductsByCategory } from '../../asyncMock'
import Itemlist from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const itemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? GetProductsByCategory : GetProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        throw new Error(error)
      })
  }, [categoryId])

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <Itemlist products={products} />
    </div>
  )
}

export default itemListContainer
