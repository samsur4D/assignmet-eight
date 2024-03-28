import { Link, Outlet } from "react-router-dom";
import { IoBook } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import { useState } from "react";
import Sort from "../Components/Sort";



const Listed = () => {

    const [tabIndex ,setTabIndex] = useState(0)

    return (
        <div>

            {/* books */}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p className="text-3xl font-mono font-bold">Books📚📚 </p>
  </aside>
  <Sort></Sort>

</footer>
            {/* ---------------- */}
            
            {/* ------------------------------card */}
   <div className=" container mx-w-7xl ml-72 mt-5  mx-auto flex items-center 
     overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                 
	<Link 
  to=''
    onClick={()=>setTabIndex(0)}
     rel="noopener noreferrer" href="#"
      className={`"flex items-center flex-shrink-0 px-6 rounded-2xl py-3 
      space-x-2  ${tabIndex === 0? 'border border-b-1 border-b-[#8e44ad]' : 'border-b-0'}
       dark:border-gray-600 dark:text-gray-600"`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
	  
      
		</svg>
       <div className="flex gap-2">
       <IoBook className="text-2xl"/>
		<span>Read Books</span>
       </div>
	</Link>

	<Link 
  to='author'
    onClick={()=>setTabIndex(1)}
    rel="noopener noreferrer" href="#"  className={`"flex items-center flex-shrink-0 px-6 rounded-2xl py-3 
    space-x-2  ${tabIndex === 1? 'border border-b-1 border-t-[#8e44ad]' : 'border-b-0'} dark:border-gray-600 dark:text-gray-600"`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			
			
		</svg>
    <div className="flex gap-2">
    <BsGift className="text-2xl"/>
		<span>Wishesh List</span>
    </div>
	</Link>
  

</div>
<div className="flex items-center justify-center">
<Outlet></Outlet>
</div>
            {/* ---------------------------------- */}
        </div>
    );
};

export default Listed;