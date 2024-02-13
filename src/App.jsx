import './App.css'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Item from './components/Item';


const App = () => {

  return (
    <>

    <BrowserRouter>
    
    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Indumentaria GL"}/>}/>

      <Route path='/tienda' element={<ItemDetailContainer id={6}/>}/>

    </Routes>
    
    </BrowserRouter>
      
      


    </>
  )
}

export default App
