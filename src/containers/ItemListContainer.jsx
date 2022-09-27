import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import Loader from "../components/Loader"
import { getFirestore , collection , getDocs, query, where } from "firebase/firestore"

// Componente Contenedor de Lista del producto //
const ItemListContainer = () => {
  const [items , setItems] = useState([]); 
  const [loading , setLoading] = useState(true)
  const [ error , setError] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection( db , "items");
    const queryItems = id ? query(itemCollection , where("categoria", "==" , id)) : itemCollection
      getDocs(queryItems).then((snapShot) => {
        setItems(snapShot.docs.map(( item ) => ({ id : item.id , ...item.data() })));
        setLoading(false);
  });
  }, [id]) ;

  return (
    <div>
      {
        loading ? (
          <Loader />
          ) : (
            error ? (
              <h1>We're sorry, something went wrong...</h1>) : (<ItemList items={items} />
        ))}
    </div> 
    );
};

export default ItemListContainer ;