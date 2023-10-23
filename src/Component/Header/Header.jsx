import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";

const Header = () => {
  const { user, LogOut } = useContext(AutContext);

  const handleLogOut = () => {
    LogOut()
      .then(res => console.log(res))
      .catch(error => console.error(error))
  }
  const someLink = <>
    <li><NavLink to="/">Home</NavLink></li>
    {user &&
      <li><NavLink to="/Acount">Acount</NavLink></li>
    }

    <li><NavLink to="/login">login</NavLink></li>
    <li><NavLink to="/sinup">Sin up</NavLink></li>
    <li><NavLink to="/profile">profile</NavLink></li>

  </>
  return (
    <div className="">
      <div>
        <div className="navbar bg-none ">
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
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                someLink
              }
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? <> <span>{user.email} </span>
                <a onClick={handleLogOut} className="btn btn-sm">logout</a>
              </> : <Link to="/login" className="btn btn-sm">login</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;