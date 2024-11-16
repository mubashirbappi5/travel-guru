import { Link } from "react-router-dom";
import Socialbtn from "../components/Socialbtn";


const Login = () => {
    return (
        <div className="pb-6">
        <div className=" flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
      <form className="card-body">
        <h1 className="text-2xl font-bold">Login</h1>
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
          <label className="label">
          <div className="form-control">
  <label className="cursor-pointer label gap-2">
    <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
    <span className="label-text text-yellow-600">Remember me</span>
  </label>
</div>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning font-bold">Login</button>
          <h5 className="text-xs text-center mt-2 ">Don’t have an account? <Link to={'/auth/register'} className="text-yellow-400">Create an account</Link></h5>
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

export default Login;