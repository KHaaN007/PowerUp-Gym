import Newsletter from "../Newsletter/Newsletter";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";
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
            <FeaturedBlog></FeaturedBlog>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
            <FeaturedTrainer></FeaturedTrainer>
        </div>
    );
};

export default Home;