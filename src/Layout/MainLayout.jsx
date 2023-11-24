import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Banner from "../Pages/Home/Banner/Banner";

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;