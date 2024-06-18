import PropTypes from 'prop-types';
export const FoodCard=(props) =>{

    const imageStyle  = {
        backgroundImage : `url(${props.image})`,
        height: '200px',
        width:'300px',
        backgroundSize : 'cover',
        backgroundPosition:'center'
    };
    return(
        <>
            <div className="container">
                <div className='upperPart' style={imageStyle}>
                    <h4 className='distance'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        {props.time} . {props.km}km
                    </h4>

                </div>

                    <div className='upper'>
                        <h2 className='food'>{props.food}</h2>
                        <h5 className='rating'>
                            {props.rating}<i className="fa fa-star" aria-hidden="true"></i>
                        </h5>
                    </div>
                    <div className='lower'>
                        <h3>{props.hotelname}</h3>
                        <h4>{props.price}</h4>
                    </div>
                    <h3 className='offer'>{props.offer}</h3>

                

            </div>
        </>
    );
};

FoodCard.propTypes={
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    hotelname: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    offer: PropTypes.string.isRequired,

};