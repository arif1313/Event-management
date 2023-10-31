
import PropTypes from 'prop-types';



const SingleDivitionEvent =({Work}) => {
   
    const {divisionName,date,placeName,images}=Work
 

    return (
        <div>
            <div  className='flex  h-36 mb-5 justify-between shadow-lg rounded-lg bg-pink-100' >
                <div>
                        <img className='h-36 w-56 rounded-lg' src={images} alt="" />
                </div>
                <div className='w-3/4 p-5 space-y-5'>
                  
                    <h1 className='text-xl font-bold'>{divisionName} </h1>
                    <h1> Place: {placeName} </h1>
                   
                    Event Date : {date}
                </div>
            </div>
        </div>
    );
};

SingleDivitionEvent.propTypes = {
    
    Work:PropTypes.object
};

export default SingleDivitionEvent;