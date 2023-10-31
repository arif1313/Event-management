
import { Carousel } from 'react-responsive-carousel';
import './caro.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../public/images/NewCover1.jpg'
import img2 from '../../../public/images/NewCover2.jpg'
import img3 from '../../../public/images/NewCover3.jpg'
import img4 from '../../../public/images/sylet/92a4b2c3f0c58f937bba45c65d067e8c.jpg'
import img5 from '../../../public/images/barishalwork/7b308f39f083af1a962f75174c94fc33.jpg'

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
                <div>
                <img className='h-96' src={img4} />
                 
                </div>
                <div>
                <img className='h-96' src={img5} />
                 
                </div>
            </Carousel>
        </div>
    );
};

export default Carosol;