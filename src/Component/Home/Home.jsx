import {  useEffect } from "react";
// import { AutContext } from "../Contex/ContexApi";
import 'aos/dist/aos.css';
import Aos from 'aos';

import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import Carosol from "../Carosol/Carosol";

import Team from "../Team/Team";
import Divition from "../DivitionWork/Divition";

const Home = () => {
   
    const data = useLoaderData()
    const services = data.services
 

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

    return (
        <div>
            {/* carosol */}
            <Carosol></Carosol>
{/* service */}
 <div className="justify-center items-center">
<div data-aos="zoom-in-right"><h2 className="text-4xl font-bold text-center mb-10"> Our <span className="text-pink-500">services</span> </h2></div>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-2/3 mx-auto  mb-10">
{/* grid grid-cols-3 gap-7 */}
{
  services.map(service=><Service key={service.id} OurService={service}></Service>)
}
</div>
 </div>
 <div data-aos="zoom-in-right"><h2 className="text-4xl font-bold text-center mb-10"> Previous <span className="text-pink-500"> Work</span>  </h2></div>
{/* foter */}
<Divition></Divition>
<Team></Team>

        </div>
    );
};

export default Home;