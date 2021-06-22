import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
  //console.log(initial, stock, onAdd)

  const [items, setItems] = useState(initial)

  const addItems = () => {
    items < stock ? setItems(items + 1) : alert('el stock se ha agotado')
  }

  const removeItems = () => {
    items >= stock ? setItems(items - 1) : alert('no puedes eliminar mas productos del stock')
  }

  return (
    <div className="my-4">
      <div className="flex m-2 items-center justify-center">
        <i className="btn btn-green cursor-pointer" onClick={removeItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </i>
        <span className="m-6">{items}</span>
        <i className="btn btn-green cursor-pointer" onClick={addItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </i>
      </div>

      <div className="flex m-2 items-center justify-center ">
        <button className="btn btn-green btn-green-hover" onClick={() => onAdd(items)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
