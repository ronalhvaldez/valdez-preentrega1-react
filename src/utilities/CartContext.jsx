import { createContext, useState, useContext } from 'react'

export const Context = createContext()

export const useCartContext = () => useContext(Context)

export function CustomProvider({ children }) {
  const [productsAdded, setProductsAdded] = useState([])

  const onAdd = (newProduct, quantity) => {
    const idProd = productsAdded.findIndex(product => {
      return product.id === newProduct.id
    })

    if (idProd !== -1) {
      productsAdded[idProd].quantity += newProduct.quantity
      setProductsAdded([...productsAdded])
    } else {
      setProductsAdded([...productsAdded, newProduct])
    }
  }

  const totalPrice = () => productsAdded.reduce((count, prod) => (count += prod.quantity * prod.price), 0)

  const deleteProduct = id => {
    setProductsAdded(productsAdded.filter(prod => prod.id !== id))
  }

  const emptyCart = () => {
    setProductsAdded([])
  }

  return (
    <Context.Provider
      value={{
        productsAdded,
        onAdd,
        totalPrice,
        deleteProduct,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  )
}
