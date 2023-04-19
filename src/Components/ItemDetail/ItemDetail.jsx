import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="CardItems">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info"> Precio: ${price}</p>
        <p className="Info"> Stock disponible: {stock} </p>
      </section>
      <footer className="ItemFooter">
        <ItemCount initial={1} stock={10} onAdd={quantity => console.log('cantidad agregada', quantity)} />
      </footer>
    </article>
  )
}

export default ItemDetail
