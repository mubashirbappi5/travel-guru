
import { useState } from "react";
import Navber from "../components/Navber";
import Test from "../components/Test";






const Home = () => {
    const [showbooking,setshowbooking] = useState(false)
    const handlebooking = ()=>{
        console.log("btn working")
        setshowbooking(true)

    }
   
    return (
        <div className={`  bg-bgi bg-opacity-50  bg-cover bg-center min-h-screen py-3`}>
          <div className="absolute inset-0 bg-[#1f1b1b]  bg-opacity-50"></div>
            <div className="relative z-30">
            <Navber/>
           <main className=" grid grid-cols-3 mt-10">
           <div className="col-span-1 ml-12 space-y-2">
           <h1 className="text-4xl font-bold text-white">COX&apos;S BAZAR</h1>
           <p className="text-white">Cox&apos;s bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
           <button onClick={handlebooking} className="btn btn-warning">Booking</button>


           </div>

          <div className="col-span-2">

          {
            showbooking?
            <div className="flex justify-center">
                 <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input type="email" placeholder="origin" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="text" placeholder=" your Destination" className="input input-bordered" required />
         
        </div>
        <div className="grid grid-cols-2 gap-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input type="date"  className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <input type="date" className="input input-bordered" required />
         
        </div>
     

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Start Booking</button>
        </div>
      </form>
      </div>



            </div>
            
            
            :<Test/>
          }
          </div>
           </main>
            
            </div>
            
             
             
            
             
             
             
        
        </div>
    );
};

export default Home;