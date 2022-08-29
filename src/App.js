import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import  ItemListContainer from "./components/ItemListContainer"
import { Title } from "./components/Title";



const App = ()  => {
  
     const name = "Aqui van los productos"  

    return (
        <div>
        <NavBar />
        <Title />
        <ItemListContainer name = {name} />
        <Footer />
        </div>
    )
}

export default App;