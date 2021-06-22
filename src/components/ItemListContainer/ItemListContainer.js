import React from 'react';
import ItemCount from './ItemCount/ItemCount';

const ItemListContainer = ({props}) => {

  const contador = (cantidad) => {
    console.log(`agregaste ${cantidad} productos al carrito de compras`)
  }
    
  return (

      <div className="my-8">
        
        <p className="text-center">{props}</p>

        <ItemCount initial={1} stock={50} onAdd={contador}/>

      </div>

  )
  

}


export default ItemListContainer;