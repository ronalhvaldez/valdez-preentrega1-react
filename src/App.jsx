import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  )
}

export default App
