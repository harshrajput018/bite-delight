import About from "./about";
import Booking from "./booking";
import Footer from "./footer";
import Gallery from "./gallery"
import Home from "./home"
import Menu from "./menu";
import Venues from "./venue";
import '../App.css';

const Main = () => {

    return (
        <div className="main">
            
            <Home />
            <About/>
            <Gallery />
            <Menu/>
            <Venues/>
            <Footer/>
        </div>
    )

}
export default Main;