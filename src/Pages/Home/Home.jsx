import Newsletter from "../Newsletter/Newsletter";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeaturedClasses from "./FeaturedClasses/FeaturedClasses";
import FeaturedTrainer from "./FeaturedTrainer/FeaturedTrainer";
import Marqee from "./Marqee/Marqee";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marqee></Marqee>
            <Featured></Featured>
            <About></About>
            <FeaturedClasses></FeaturedClasses>
            <Testimonial></Testimonial>
            <FeaturedTrainer></FeaturedTrainer>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;