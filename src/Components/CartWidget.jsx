import { Link } from 'react-router-dom'
import { Shop } from './Icons'
import { useCartContext } from '@CartContext'

const CartWidget = () => {
  const { productsAdded } = useCartContext()
  return (
    <Link to={'/cart'} className="btn d-flex justify-content-center align-items-center py-2">
      <span className="fs-6 m-0 p-2 fw-semibold">{productsAdded.length}</span>
      <span className="text-primary " style={{ width: '20px' }}>
        <Shop />
      </span>
    </Link>
  )
}

export default CartWidget
