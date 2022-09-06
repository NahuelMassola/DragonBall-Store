import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import  ItemListContainer from "./components/ItemListContainer";
import { Title } from "./components/Title/Title";



const App = ()  => {
    
    return (
        <div>
        <NavBar />
        <Title />
        <ItemListContainer ></ItemListContainer>
        <Footer />
        </div>
    )
}

export default App;