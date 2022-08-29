import "../App.css" ;

const ItemListContainer = (props) => {

    return (
    <div>
        <h3 className="text-center m-5"> {props.name} {props.lastname}</h3>
    </div>
    ) ;
} ;

export default ItemListContainer ;