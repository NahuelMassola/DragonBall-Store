import React from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    function sumar () {
        if  (count < props.stock) {
            setCount(count +1) ;
        } 
    }

    function restar () {
        if (count > 0) {
            setCount(count -1 );
        }
    }

    return (
        <div className="col-12 d-flex justify-content-between mb-3 my-2">
            <button className="col btnContador" onClick={restar}> - </button>
            <span className="col text-center">{count}</span>
            <button className="col btnContador" onClick={sumar}> + </button>
        </div>
        
    )
            
}
export default ItemCount ;
