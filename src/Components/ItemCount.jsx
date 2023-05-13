import { useState } from 'react'
import { useCartContext } from '@CartContext'

const ItemCount = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const { onAdd } = useCartContext()

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-wrap align-items-center">
        <div className="d-flex me-auto">
          <p className="fs-6 m-auto fw-semibold">Cantidad</p>
        </div>
        <div className="d-flex my-2 align-items-center">
          <button className="btn btn-light" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
            -
          </button>
          <p className="fs-6 px-3 m-auto fw-semibold">{quantity}</p>
          <button className="btn btn-light" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd({ ...product, quantity })}>
        Agregar al carrito
      </button>
    </div>
  )
}
export default ItemCount
