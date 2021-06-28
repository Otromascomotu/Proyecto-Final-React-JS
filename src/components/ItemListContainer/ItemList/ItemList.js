/* import Item from './Item' */

const ItemList = ({products}) => {

  return(
    
    <div>
      
      {products.map((element, i) => {
        
        return (
          
          <div className="card" key={i}>
          <p> Nombre :{element.nombre}</p>
          <p> Descripcion :{element.descripcion}</p>
          <p> Precio: {element.precio}</p>
          <p> Stock : {element.stock}</p>
          </div>
        
        );
      })}  
    </div>
  );
};

export default itemList;
        
        
   /*  <div id="ItemList"
    className="container col-2 col-span-5 grid grid-cols-4 grid-flow-row auto-rows-min gap-4 justify-center full-width">
    {
        products.map((element) =>{
            return(
                <Item element={(element)} />
                );
        })
    }
    </div> */




