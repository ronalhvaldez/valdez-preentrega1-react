import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({ product }) => {
  const { id, name, img, price, stock } = product
  return (
    <div className="card">
      <Link to={`/item/${id}`} className="option">
        <img src={img} alt={name} className="card-img-top" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">Precio: ${price}</h5>
        <p className="card-text">Stock disponible: {stock}</p>
        <ItemCount product={product} />
      </div>
    </div>
  )
}

export default Item
