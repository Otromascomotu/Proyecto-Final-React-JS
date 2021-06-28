import React from "react";
import ItemCount from './Itemcount';
/* import Card from '.components/Card'; */

const Item = ( {element} ) => {

  const contador = (cantidad) => {

    cantidad === 1

      console.log(`agregaste ${cantidad} productos al carrito de compras`)

  };

  return(
    <div>
      <img className="" src={element.pictureUrl} alt="imagen del producto" />
      <div className="card">
        <h5 className="">{element.nombre}</h5>
        <p className="">{element.descripcion}</p>
        <p className="">Precio: {element.precio}</p>
        <p className="">Stock: {element.stock}</p>
        <ItemCount initial={1} stock={50} onAdd={contador}/>
      </div>
    </div>
  );

};

export default Item;