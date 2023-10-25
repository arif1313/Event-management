import {  useEffect } from "react";
// import { AutContext } from "../Contex/ContexApi";
import 'aos/dist/aos.css';
import Aos from 'aos';

import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";
import Carosol from "../Carosol/Carosol";

import Foter from "../Footer/Foter";


const Home = () => {
   
    const data = useLoaderData()
    const services = data.services
  console.log(services)

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

    return (
        <div>
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

<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

        </div>
    );
};

export default Home;