import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({event}) => {
    const {name,price,image,des,id} = event;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} className='w-full h-60' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-medium'>Package: {price}Tk</p>
                    <p>{des}</p>
                    
                    <div className="card-actions justify-end">
                    <Link className='w-full' to={`/details/${id}`}><button className="btn bg-teal-100 w-full">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    
    event: PropTypes.object
}

export default Card;