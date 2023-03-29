import cart from './assets/cart-32.png'

const CartWidget = () => {
  return (
    <div className="d-flex">
      <img src={cart} alt="cart-widget" />
      <div>0</div>
    </div>
  )
}

export default CartWidget
