
import PropTypes from 'prop-types';

const Service = ({OurService}) => {
    const {service_name }= OurService
    console.log(service_name);
   
    return (
        <div>
            {
              <p>service: { service_name}</p>  
            }
        </div>
    );
};

Service.propTypes = {
    OurService:PropTypes.object  
};

export default Service;