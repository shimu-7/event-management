import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2 className="text-3xl">this is home page</h2> */}
            <Banner></Banner>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
};

export default Home;