import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Blog = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>

            <h1 className="text-2xl my-5 font-bold text-center">{user.displayName}'s Blog</h1>
            <div className="card  card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lUxfu0j72EtVywUBDBrGTAE9hKH9WneLWuZ5Ld5uGA&s" className='w-full h-[300px]' alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p className="font-medium">A wedding planner is a professional who assists with the design, planning and management of a client's wedding. Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized.Wedding planners support couples and their families with the organisation, hiring, purchasing and management involved with planning a successful wedding. For some clients, they will only be involved in specific aspects of the process, such as hiring caterers and entertainment or supporting on the day itself.</p>
                
                    <div className="card-actions justify-end">
                        <Link to={`/`}><button className="btn bg-teal-100 w-full">Go Back</button></Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Blog;