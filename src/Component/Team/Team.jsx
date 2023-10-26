// import { useLoaderData } from "react-router-dom";


import { useEffect, useState } from "react";
import Member from "./member";



const Team = () => {
    const myreq = new Request('team.json')
   
    const [members, setData]=useState([])
    useEffect(()=>{
        fetch(myreq)
        .then(res=>res.json())
       .then(data=>setData(data.teamMembers))
    },
[])

console.log(members)
    
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qy4NX8m/3622d8001e6eac2c57c8882bf7bb6351.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" grid grid-cols-3 gap-10">
                      {
                       members.map(member=><Member key={member.id} AMember={member}></Member>)
                      }
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Team;