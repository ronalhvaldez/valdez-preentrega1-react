const Products = [
  {
    id: 1,
    name: 'Smartphone 1',
    price: 100000,
    category: 'Smartphone',
    img: './pexels-lisa-fotios-1092644(1).jpg',
    stock: 10,
    description: 'Descripcion de smartphone 1'
  },
  {
    id: 2,
    name: 'Smartphone 2',
    price: 75000,
    category: 'Smartphone',
    img: './pexels-lisa-fotios-1092671.jpg',
    stock: 10,
    description: 'Descripcion de smartphone 2'
  },
  {
    id: 3,
    name: 'Smartwatch 1',
    price: 55000,
    category: 'Smartwatch',
    img: './pexels-vishven-solanki-2861929.jpg',
    stock: 10,
    description: 'Descripcion de smartwatch 1'
  },
  {
    id: 4,
    name: 'Smartwatch 2',
    price: 75000,
    category: 'Smartwatch',
    img: './pexels-donald-tong-23475.jpg',
    stock: 10,
    description: 'Descripcion de smartwatch 2'
  },
  { id: 5, name: 'Tablet 1', price: 115000, category: 'table', img: './pexels-josh-sorenson-1334597.jpg', stock: 10, description: 'Descripcion de tablet 1' },
  {
    id: 6,
    name: 'Tablet 2',
    price: 95000,
    category: 'tablet',
    img: './pexels-photomix-company-106341.jpg',
    stock: 10,
    description: 'Descripcion de tablet 2'
  },
  {
    id: 7,
    name: 'Notebook 1',
    price: 175000,
    category: 'Notebook',
    img: './pexels-vlada-karpovich-4050347.jpg',
    stock: 10,
    description: 'Descripcion de Notebook 1'
  },
  {
    id: 8,
    name: 'Notebook 2',
    price: 200000,
    category: 'Notebook',
    img: './pexels-vlada-karpovich-4050312.jpg',
    stock: 10,
    description: 'Descripcion de Notebook 2'
  }
]

export const GetProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Products)
    }, 500)
  })
}

export const GetProductsById = productsId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Products.find(prod => prod.id === productsId))
    })
  })
}
