import Newsletter from "../Newsletter/Newsletter";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import Marqee from "./Marqee/Marqee";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marqee></Marqee>
            <Featured></Featured>
            <About></About>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;