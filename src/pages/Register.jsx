import { Link } from "react-router-dom";
import Socialbtn from "../components/Socialbtn";


const Register = () => {
    return (
        <div className="pb-6">
            <div className=" flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
      <form className="card-body">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confrim Passowrd</span>
          </label>
          <input type="password" placeholder="Confrim Passowrd" className="input input-bordered" required />
          </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-warning font-bold">Create an account</button>
          <h5 className="text-xs text-center mt-2 ">Already have an account?  <Link to={'/auth'} className="text-yellow-400">Login</Link></h5>
        </div>
      </form> 
    </div>
    </div>
    <div className="divider w-52 mx-auto">OR</div>
        <div className="flex justify-center">
        <Socialbtn/>
    </div>
        </div>
    );
};

export default Register;