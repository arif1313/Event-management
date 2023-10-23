import { useContext } from "react";
import { Link } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";


const SineUp = () => {
    const {createuser} = useContext(AutContext);

   
    const hanleSinUP=(e)=>{
     
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createuser( email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className=" w-full min-h-screen bg-[url]">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
         
          </div>
          <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={hanleSinUP}>
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">Already have an acount?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SineUp;