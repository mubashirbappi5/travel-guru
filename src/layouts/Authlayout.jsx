import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const Authlayout = () => {
    return (
        <div>
            <Navber/>
            <h1>this is auth page</h1>
            <Outlet/>
            
        </div>
    );
};

export default Authlayout;