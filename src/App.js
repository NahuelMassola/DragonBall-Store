import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import  ItemListContainer from "./containers/ItemListContainer";
import { Title } from "./components/Title/Title";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { CartWidget } from "./components/Header/CartWidget";
import Contact from "./components/Contact/Contact";

const App = ()  => {
    
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Title />
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/categories/:categoriesId" element={<ItemListContainer/>} />
                    <Route path="/categories/:categoriesId" element={<ItemListContainer/>} />
                    <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<CartWidget/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;