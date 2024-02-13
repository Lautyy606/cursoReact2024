import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({id}) => {

    const [producto, setProducto] = useState([]);

    useEffect(()=>{

        const fetchData = async () => {
          try {
            const response = await fetch("./productos.json");
            const data = await response.json()
            const catalogo = data.find((p)=>p.id == id)
            setProducto(catalogo)
          }catch(error){
              console.log("Error" + error);
          }
        }
    
        fetchData()
    
      },[id])

  return (
    <div>
    <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer