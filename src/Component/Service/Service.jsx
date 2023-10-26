import 'aos/dist/aos.css';
import Aos from 'aos';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';



const Service = ({OurService}) => {
    const {service_name, service_icon,title,service_image ,background_colour,button_background_colour, text_colour,id}= OurService
    console.log(service_name, service_icon);
      
    return (
        // <div data-aos="flip-left"></div>
      <div className=''>
          <div data-aos="zoom-in-left">
        
        <div className="card card-compact shadow-xl border-4">
        <figure><img className='h-32 mb-2  border-4 rounded-full' src={service_icon} alt="Shoes" style={{borderColor:text_colour}}/></figure>
        <div className="card-body "  style={{ backgroundColor: background_colour }}>
          <h2 className="card-title" style={{color:text_colour}}>{service_name}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
          <Link className='w-full btn btn-primary  border-none font-bold' to={`/service/${id}`} style={{ backgroundColor:button_background_colour, color:text_colour}}> <a  >Buy Now</a>
          </Link> </div>
        </div>
      </div> 
    
   </div>
      </div>
    );
};

Service.propTypes = {
    OurService:PropTypes.object  
};

export default Service;