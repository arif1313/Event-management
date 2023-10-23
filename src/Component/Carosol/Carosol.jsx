
import { Carousel } from 'react-responsive-carousel';
import './caro.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../public/images/NewCover1.jpg'
import img2 from '../../../public/images/NewCover2.jpg'
import img3 from '../../../public/images/NewCover3.jpg'

const Carosol = () => {
    return (
        <div>
             <Carousel className=''>
                <div>
                    <img className='h-96' src={img1} />
                  
                </div>
                <div>
                    <img className='h-96'  src={img2} />
                   
                </div>
                <div>
                <img className='h-96' src={img3} />
                 
                </div>
            </Carousel>
        </div>
    );
};

export default Carosol;