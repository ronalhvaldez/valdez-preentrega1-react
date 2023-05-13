import Item from './Item'

const Itemlist = ({ products }) => {
  return (
    <div className="row">
      {products.map(prod => {
        return (
          <div key={prod.id} className="col-md-6 col-lg-3 p-2">
            <Item product={prod} />
          </div>
        )
      })}
    </div>
  )
}

export default Itemlist
