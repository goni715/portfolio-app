import MasterLayout from "./components/MasterLayout.jsx";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav.jsx";
import Navbar from "./components/portfolio/Navbar.jsx";


const App = () => {
    return (
        <>
            <MobileNav/>
            <Navbar/>
            <MasterLayout/>
            <ScrollToTop color="#f29f67" smooth style={{ backgroundColor: "#1e1e2c", borderRadius: "80px", paddingLeft:"5px", paddingRight:"5px" }} />
        </>
    );
};

export default App;