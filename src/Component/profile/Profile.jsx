import { useContext } from "react";
import { AutContext } from "../Contex/ContexApi";

import avatar from '../../../public/images/304b221e61d7b1dcfdabbe0bcab4f1c8.jpg'

const Profile = () => {
    const { user } = useContext(AutContext);
    const{displayName,email,photoURL}=user
    console.log(user)
   
    return (
        <div className="flex justify-center items-center">
            <div className="bg-pink-100 mt-12 w-2/3 rounded-lg flex justify-between p-10">
                <div>
                    <p className="p-5">Name: {displayName}</p>
                    <p className="p-5">Email: {email}</p>
                </div>
                <div>
                    <img className="w-36 h-36 rounded-full" src={photoURL?photoURL:avatar} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Profile;