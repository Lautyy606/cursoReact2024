import './App.css'
import Menu from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App () {

  return (
    <>
      <Menu/>

      <ItemListContainer greeting={"Bienvenidos a Indumentaria GL"}/>

    </>
  )
}

export default App
