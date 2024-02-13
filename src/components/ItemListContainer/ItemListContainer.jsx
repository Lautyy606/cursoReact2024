import {useState, useEffect} from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList"

const ItemListContainer = ({greeting}) => {

  const [productos,setProductos] = useState([]);

  useEffect(()=>{

    const fetchData = async () => {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json()
        setProductos(data)
      }catch(error){
          console.log("Error" + error);
      }
    }

    fetchData()

  },[])
    
  return (
    
    <div>

      <h1>{greeting}</h1>

      <ItemList productos={productos}/>

    </div>
  )
}

export default ItemListContainer