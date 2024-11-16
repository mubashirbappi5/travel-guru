import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";


const MainRouts = createBrowserRouter([{
    path:'/',
    element:<Rootlayout/>,
    children:[{
        path:'/',
        element:<Home/>
    }]
},
{
    path:'/auth',
    element:<Authlayout/>,
    children:[{
        path:'/auth',
        element:<Login></Login>
    },
{
    path:'/auth/register',
    element:<Register/>
}]
}

])
   

export default MainRouts;