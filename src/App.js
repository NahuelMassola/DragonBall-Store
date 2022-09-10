import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import  ItemListContainer from "./containers/ItemListContainer";
import { Title } from "./components/Title/Title";
import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = ()  => {
    
    return (
        <div>
            <NavBar />
            <Title />
            <ItemListContainer />
            <ItemDetailContainer />
            <Footer />
        </div>
    )
}

export default App;