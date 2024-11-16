import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/image (2).png'
import logo2 from '../assets/logo.png'

const Navber = () => {
  const location = useLocation()
  const auth = location.pathname === '/auth'
  
  
  const links = <>
            <li><NavLink to={'/news'}>News</NavLink></li>
            <li><NavLink to={'/destination'}>Destination</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
   
  </>
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar flex justify-between   bg-transparent">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          
       {links}
      </ul>
    </div>
    <Link to={'/'} className=" w-28 text-white ">
    {
      auth?<img src={logo2} alt="" />: <img src={logo} alt="" />
    }
      
    </Link>
  </div>
 
  <div className={` hidden lg:flex ${auth?'text-black':'text-white'} gap-40`}>
  {
    auth?'':<div>
    <input type="text" placeholder='Search your Destination...' className=' px-3 py-1 text-white border rounded-md bg-[#FFFFFF33]  outline-0 placeholder:text-white text-sm' />
 </div>
  }
    <ul className="menu menu-horizontal px-1  gap-10">
    
      {links}
    </ul>
    
  </div>
  <div className="">
    <Link to={'/auth'} className="btn btn-warning  font-bold">Login</Link>
  </div>
 
</div>
            
        </div>
    );
};

export default Navber;