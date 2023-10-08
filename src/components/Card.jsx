import PropTypes from 'prop-types';

const Card = ({event}) => {
    const {name,price,image,des} = event;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} className='w-full h-60' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{des}</p>
                    <p>Price: {price} Tk</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-teal-100 w-full">Details</button>
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