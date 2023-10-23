import { useContext } from "react";
import { AutContext } from "../Contex/ContexApi";

import cover1 from '../../../public/images/NewCover1.jpg'
import cover6 from '../../../public/images/NewCover2.jpg'
import cover7 from '../../../public/images/NewCover3.jpg'
import cover8 from '../../../public/images/NewCover4.jpg'

import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import Carosol from "../Carosol/Carosol";
import Header from "../Header/Header";


const Home = () => {
    const AuthInfo = useContext(AutContext)
    const data =useLoaderData()
    const services = data.services
  console.log(services)

    return (
        <div className="">
         
         
         
            {/* carosol */}
            <Carosol></Carosol>
{/* service */}
 <div>
<h2 className="text-4xl font-bold text-center mb-10"> Our <span className="text-red-400">services</span> </h2>
<div className="grid grid-cols-3 gap-7">
{
  services.map(service=><Service key={service.id} OurService={service}></Service>)
}
</div>
 </div>


        </div>
    );
};

export default Home;