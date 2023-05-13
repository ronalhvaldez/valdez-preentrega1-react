import ItemCount from './ItemCount'

const ItemDetail = products => {
  const { name, img, price, stock } = products
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <img src={img} alt={name} className="w-100" />
          <article className="CardItems py-4">
            <header className="Header">
              <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture></picture>
            <section>
              <p className="Info"> Precio: ${price}</p>
              <p className="Info"> Stock disponible: {stock} </p>
            </section>
            <div className="ItemFooter">
              <ItemCount product={products} />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
