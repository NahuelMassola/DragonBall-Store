import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import  ItemListContainer from "./containers/ItemListContainer";
import { Title } from "./components/Title/Title";
import { CartWidget } from "./components/Header/CartWidget";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Contact from "./components/Contact/Contact";
import CustomProvider from "./context/CartContext"; 


const App = ()  => {
    return (
            <CustomProvider>
                <BrowserRouter>
                    <NavBar />
                    <Title />
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/category/:id" element={<ItemListContainer/>} />
                        <Route path="/item/:id" element={<ItemDetailContainer/>} />
                        <Route path="/cart" element={<CartWidget/>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CustomProvider>
    )
}

export default App;