import Item from '../Item/Item'

const Itemlist = ({ products }) => {
  return (
    <div className="row">
      {products.map(prod => {
        const { category, description, id, img, name, price, stock } = prod
        return (
          <div key={id} className="col-md-6 col-lg-3 p-2">
            <Item category={category} description={description} id={id} img={img} name={name} price={price} stock={stock} />
          </div>
        )
      })}
    </div>
  )
}

export default Itemlist
