import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    const [theme , setTheme] = useState('light')
           
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme' , localTheme)
    },[theme])

    const handelTheme = (e) =>{
             if(e.target.checked){
                setTheme('luxury')
             }else{
                setTheme('light')
             }
    }
    return (
        <div className="navbar bg-base-100 shadow-xl px-4 fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="font-bold"><a>Home</a></li>
              <li className="font-bold">
                <a>Listed Books</a>
              </li>
              <li className="font-bold"><a>Pages To Read</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-extrabold">Book<span className="text-purple-800">!</span>sh<span className="text-purple-900">Zone</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-5">

            <NavLink to='/' className={({isActive}) => isActive? 'mr-5 font-extrabold bg-red-200 border border-[#3B3B98] px-5 py-2 rounded-xl' : 'mr-5 font-bold px-5 py-2 rounded-xl bg-red-100 '}><a>Home</a></NavLink>

            <NavLink to='/listed'className={({isActive}) => isActive? 'mr-5 font-extrabold bg-red-200 border border-[#3B3B98] px-5 py-2 rounded-xl' : 'font-bold px-5 py-2 rounded-xl bg-red-100 '}>
             <a>Listed Books</a>
            </NavLink>

            <NavLink to='/pagesRead' className={({isActive}) => isActive? 'ml-5 font-extrabold bg-red-200 border border-[#3B3B98] px-5 py-2 rounded-xl' : 'ml-5 font-bold px-5 py-2 rounded-xl bg-red-100 '}><a>Pages To Read</a></NavLink>

            {/* ----------- */}
            <NavLink to='/review' className={({isActive}) => isActive? 'ml-5 font-extrabold bg-red-200 border border-[#3B3B98] px-5 py-2 rounded-xl' : 'ml-5 font-bold px-5 py-2 rounded-xl bg-red-100 '}><a>Public Response</a></NavLink>

            <NavLink to='/contact' className={({isActive}) => isActive? 'ml-5 font-extrabold bg-red-200 border border-[#3B3B98] px-5 py-2 rounded-xl' : 'ml-5 font-bold px-5 py-2 rounded-xl bg-red-100 '}><a>Contact</a></NavLink>
            {/*  */}
          </ul>
        </div>

             

        <div className="navbar-end flex gap-3">
          <a className="btn bg-green-600 text-white font-bold">Sign In</a>
          <a className="btn bg-blue-500 text-white font-bold">Sign Up</a>
        </div>
        <label className="flex cursor-pointer gap-2 ml-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>

  <input onChange={handelTheme} type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

      </div>
    );
};

export default Nav;