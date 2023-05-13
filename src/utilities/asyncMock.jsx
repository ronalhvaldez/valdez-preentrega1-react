import { getDoc, doc, getFirestore } from 'firebase/firestore'

export const GetProducts = async () => {
  const db = getFirestore()
  const queries = doc(db, 'data', 'products')
  const products = await getDoc(queries).then(response => response.data().products)
  return products
}

export const GetProductsById = async productsId => {
  const db = getFirestore()
  const queries = doc(db, 'data', 'products')
  const products = await getDoc(queries).then(response => response.data().products)
  return products.find(prod => prod.id === productsId)
}

export const GetProductsByCategory = async productsCategory => {
  const db = getFirestore()
  const queries = doc(db, 'data', 'products')
  const products = await getDoc(queries).then(response => response.data().products)
  return products.filter(prod => prod.category.toLowerCase() === productsCategory)
}
