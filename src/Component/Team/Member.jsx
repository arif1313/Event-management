

import PropTypes from 'prop-types';
import { FaFacebookSquare,FaInstagram } from 'react-icons/fa';

const Member = ({AMember}) => {
  
    const { name, position, profile} = AMember

    return (
        <div className="border-2 p-5 border-pink-400 text-center flex flex-col items-center rounded-lg">
            <div>
                <img className="w-32 h-28 rounded-full" src={profile} alt="" />
            </div>
           <p className="text-white font-bold">{name}</p>
           <p className="text-white ">{position}</p>
          <div className='flex'>
          <FaFacebookSquare className='mr-5'></FaFacebookSquare><FaInstagram></FaInstagram>
          </div>

        </div>
    );
};

Member.propTypes = {
    AMember:PropTypes.object
};

export default Member;