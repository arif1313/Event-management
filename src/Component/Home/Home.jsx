import { useContext, useEffect } from "react";
import { AutContext } from "../Contex/ContexApi";
import 'aos/dist/aos.css';
import Aos from 'aos';

import cover1 from '../../../public/images/NewCover1.jpg'
import cover6 from '../../../public/images/NewCover2.jpg'
import cover7 from '../../../public/images/NewCover3.jpg'
import cover8 from '../../../public/images/NewCover4.jpg'

import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import Carosol from "../Carosol/Carosol";
import Header from "../Header/Header";
import Foter from "../Footer/Foter";


const Home = () => {
    const AuthInfo = useContext(AutContext)
    const data =useLoaderData()
    const services = data.services
  console.log(services)

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

    return (
        <div className="">
         
         
         
            {/* carosol */}
            <Carosol></Carosol>
{/* service */}
 <div className="justify-center items-center">
<div data-aos="zoom-in-right"><h2 className="text-4xl font-bold text-center mb-10"> Our <span className="text-red-400">services</span> </h2></div>
<div className="grid grid-cols-3 gap-7 w-2/3 mx-auto">
{/* grid grid-cols-3 gap-7 */}
{
  services.map(service=><Service key={service.id} OurService={service}></Service>)
}
</div>
 </div>
 <div data-aos="zoom-in-left"><h2 className="text-4xl font-bold text-center mb-10"> Previous Work </h2></div>
{/* foter */}
<Foter></Foter>



        </div>
    );
};

export default Home;