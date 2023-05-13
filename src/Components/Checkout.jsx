import { useState, useEffect } from 'react'
import { useCartContext } from '@CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const TableAndForm = () => {
  const { productsAdded, deleteProduct, totalPrice, emptyCart } = useCartContext()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [repeatEmail, setRepeatEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loader, setLoader] = useState(false)
  const [idCompra, setIdCompra] = useState('')

  const validateEmail = () => {
    setErrorMessage('')
    try {
      if (email.toLocaleLowerCase() !== repeatEmail.toLocaleLowerCase()) throw Error('Los email no coinciden')
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const insertOrder = () => {
    setLoader(true)
    const order = { buyer: { name: '', email: '' }, items: [], total: 0 }
    order.buyer = { name, email }
    order.items = productsAdded.map(list => {
      return list
    })
    order.total = totalPrice()

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
      .then(response => {
        setIdCompra(response.id)
      })
      .finally(() => {
        setLoader(false)
      })
  }

  useEffect(() => {
    validateEmail()
  }, [name, email, repeatEmail])

  return (
    <>
      <div className="bg-white p-3 shadow p-3 mb-4 bg-body-tertiary rounded">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Categoria</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productsAdded.map(products => {
              return (
                <tr key={products.id}>
                  <th scope="row">{products.quantity}</th>
                  <td>{products.name}</td>
                  <td>${products.price}</td>
                  <td>{products.category}</td>
                  <td className="text-end">
                    <button onClick={() => deleteProduct(products.id)} className="bg-transparent border border-0 link-danger">
                      Eliminar producto
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="d-flex justify-content-end mb-2">
          <h1 className="h6">Total: ${totalPrice()}</h1>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary mx-2" onClick={() => emptyCart()}>
          Vaciar carrito
        </button>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Proceder al pago
        </button>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Proceder al pago
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {loader ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : null}
              {idCompra.length > 0 ? (
                <div className="text-center">
                  <p className="h3">Se hizo la compra con exito</p>
                  <p>El id de la compra es {idCompra}</p>
                </div>
              ) : (
                <>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre y apelido
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        aria-describedby="basic-addon3 basic-addon4"
                        onChange={e => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        id="email"
                        aria-describedby="basic-addon3 basic-addon4"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    {errorMessage.length > 0 ? (
                      <div className="form-text text-danger" id="basic-addon4">
                        {errorMessage}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="validateMail" className="form-label">
                      Validar Email
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="validateMail"
                        aria-describedby="basic-addon3 basic-addon4"
                        value={repeatEmail}
                        onChange={e => setRepeatEmail(e.target.value)}
                      />
                    </div>

                    {errorMessage.length > 0 ? (
                      <div className="form-text text-danger" id="basic-addon4">
                        {errorMessage}
                      </div>
                    ) : null}
                  </div>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  if (idCompra.length > 0) emptyCart()
                }}
              >
                Cerrar
              </button>
              {!idCompra.length ? (
                <button
                  type="button"
                  className={`btn ${name.length === 0 || errorMessage.length > 0 ? 'btn-secondary' : 'btn-success'} `}
                  onClick={() => {
                    if (name.length !== 0 || errorMessage.length === 0) insertOrder()
                  }}
                >
                  Realizar compra
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Checkout = () => {
  const { productsAdded } = useCartContext()

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 py-4">
          <h1 className="h1">Checkout</h1>
        </div>

        <div className="col-lg-12">
          {productsAdded.length > 0 ? (
            <TableAndForm />
          ) : (
            <div className="alert alert-dark" role="alert">
              No tenes agregado ningun producto
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Checkout
