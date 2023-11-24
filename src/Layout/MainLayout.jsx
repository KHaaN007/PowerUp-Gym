import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Banner from "../Pages/Home/Banner/Banner";
import NavBar from "../Shared/NavBar/NavBar";



const MainLayout = () => {
    return (
        <div>
 
           <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;