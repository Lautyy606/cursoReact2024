import './App.css'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemCount from './components/ItemCount';



const App = () => {

  return (
    <>

    <BrowserRouter>
    
    <NavBar/>

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Indumentaria GL"}/>}/>

      <Route path='/producto/:idProducto' element={<ItemDetailContainer/>}/>

      <Route path='/categoria/:productType' element={<ItemListContainer greeting={""}/>}/>
{/* 
      <Route path='/categoria/:idBuzos' element={<ItemListContainer/>}/>

      <Route path='/categoria/:idPantalones' element={<ItemListContainer/>}/> */}

    </Routes>
    
    </BrowserRouter>
      
      


    </>
  )
}

export default App
