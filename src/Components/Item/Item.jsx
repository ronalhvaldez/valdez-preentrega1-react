import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">Precio: ${price}</h5>
        <p className="card-text">Stock disponible: {stock}</p>
        <button href="#" className="btn btn-primary">
          Detalle
        </button>
      </div>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="option">
          Ver detalle
        </Link>
      </footer>
    </div>
  )
}

export default Item
