import React, {useEffect} from 'react';
/* import ItemList from './ItemList'; */

const ItemListContainer = ({props}) => {
  
  /* const[producto,setProducto] = useState([]) */
  useEffect(() => {

    const productList = [
      {id:"1", nombre: "jugo1", descripcion: "jugoNaranja", precio: 40, stock: 10},
      {id:"2", nombre: "jugo2", descripcion: "jugoNaranja_ManzanaVerde", precio: 60, stock: 5},
      {id:"3", nombre: "jugo3", descripcion: "jugoManzanaVerde", precio: 50, stock: 4},
      {id:"4", nombre: "jugo4", descripcion: "jugoMandarina", precio: 40, stock: 3},
      {id:"5", nombre: "jugo5", descripcion: "jugoDurazno", precio: 50, stock: 4},
      {id:"6", nombre: "jugo6", descripcion: "jugoManzanaRoja", precio: 50, stock: 4},
      {id:"7", nombre: "jugo7", descripcion: "jugoZanahoria", precio: 40, stock: 2},
      {id:"8", nombre: "jugo8", descripcion: "jugoAnanas", precio: 50, stock: 2},
      {id:"9", nombre: "jugo9", descripcion: "jugoTomate_Celery", precio: 60, stock: 2},
      {id:"10", nombre: "jugo10", descripcion: "jugoAnanas_Naranja", precio: 60, stock: 5}
    ];
  
      const getItems = new Promise ((resolve, reject) => {
        console.log('buscando productos en 2 segundos...');
          setTimeout(()=>{
            resolve(productList)
          },2000);
      });

      getItems
        .then(items=> {
          items.forEach(item => {
            console.log(item);
          });
        })
        .catch(e => {
          console.log(e);
      });

  },[])

  return (

      <div className="my-8">

        <p className="text-center">{props}</p>

        {/* <ItemList /> */}

      </div>

  );
  

};


export default ItemListContainer