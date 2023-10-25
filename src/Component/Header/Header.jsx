import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";
import naving from '../../../public/images/520b1e11225b9c277d73615dd64bc6d5.jpg'



const Header = () => {
  const { user, LogOut } = useContext(AutContext);
  const handleLogOut = () => {
    LogOut()
      .then(res => console.log(res))
      .catch(error => console.error(error))
  }

  const someLink = <>
    <li ><NavLink className="navlink" to="/">Home</NavLink></li>
    {user &&
      <li><NavLink to="/contact">Contact</NavLink></li>
    }

    <li><NavLink to="/login">login</NavLink></li>
    <li><NavLink to="/sinup">Sin up</NavLink></li>
    <li><NavLink to="/profile">profile</NavLink></li>

  </>

  return (
    <div className="">
      <div>
        <div className="navbar  rounded-t-lg border-2 border-pink-300">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {
                  someLink
                }
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl font-bold">Majestic <span className="text-pink-500"> Makers</span></a>
          </div>
          <div className="-z-10">
            <img src={naving} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                someLink
              }
            </ul>
          </div>

          <div className="   hidden md:hidden lg:block">
            <img src={naving} alt="" />
          </div>



          <div className="navbar-end">
            {
              user ? <> <span className="mr-5 text-pink-600 font-bold">{user.displayName}</span>
                <label onClick={handleLogOut} className=" btn btn-sm bg-pink-300 normal-case">LogOut</label>
              </> : <Link to="/login" className="btn btn-sm">login</Link>
            }
          </div>

        </div>
       
      </div>
    
    </div>
  );
};

export default Header;