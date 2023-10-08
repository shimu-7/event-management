import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2 className="text-3xl">this is home page</h2> */}
            <Banner></Banner>
            <SectionOne></SectionOne>
            <Cards></Cards>
            <SectionTwo></SectionTwo>
           
            
            <Footer></Footer>
        </div>
    );
};

export default Home;