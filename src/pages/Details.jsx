import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../components/Footer";


const Details = () => {
    const {id} = useParams();
    const events = useLoaderData();

    const event = events.find(event=>event.id==id);
    const {name, price, description, image} =event
    return (
        <div>
            <Navbar></Navbar>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} className='w-full h-[300px]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-medium">Service Package: {price}Tk</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/`}><button className="btn bg-teal-100 w-full">Go Back</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Details;