import { useState } from "react";
import { useEffect } from "react";
import SingleDivitionEvent from "./SingleDivitionEvent";


const Divition = () => {
    const [ prework , setprework] = useState([])

    useEffect(()=>{
       
        fetch('devitionwork.json')
        .then(result =>result.json())
        .then(data=>setprework(data.divisionWork))
        
    },[])
    
    return (
        <div>
           
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-10">
      {
        prework.map(work=><SingleDivitionEvent key={work.id} Work ={work}>name</SingleDivitionEvent>)
       }
      </div>

        </div>
    );
};

export default Divition;