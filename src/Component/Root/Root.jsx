import { Outlet } from "react-router-dom";


import Header from "../Header/Header";
import Foter from "../Footer/Foter";


const Root = () => {
  return (
    <div className="mx-auto container">

    
<Header></Header>
      <Outlet></Outlet>
      <Foter></Foter>
    </div>
  );
};

export default Root;