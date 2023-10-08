import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Navbar from "../shared/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2 className="text-3xl">this is home page</h2> */}
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;