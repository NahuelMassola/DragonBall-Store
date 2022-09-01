
import AddCart from './AddCart';
import ItemCount from "./ItemCount";



const ItemListContainer = (props) => {


    return (

    <div className="col-md-4 py-3" style={{ width: '25rem' }}>
        <div className="card">
          <div className="card-body">
              <img className='img-productos' src={props.imgagen} alt="" />
              <h2 className="card-title text-center py-1">{props.nombre} </h2>
              <h4 className="card-title text-center py-1">{props.descripcion}</h4>
              <h4 className="card-title text-center py-1">${props.precio}</h4>
              <ItemCount stock={5} initial={1} />
              <AddCart></AddCart>
          </div>
        </div>
      </div> 
      
    ) ;
} ;

export default ItemListContainer ;

