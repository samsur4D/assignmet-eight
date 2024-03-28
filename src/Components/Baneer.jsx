import { Link } from "react-router-dom";


const Baneer = () => {
    return (
        <div>
                      <div className="hero h-96 bg-base-200 max-w-7xl mx-auto mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/gy15Cbm/fauzan-ardhi-e-5-Die-Y8snc-unsplash.jpg" className=" h-80 ml-10  rounded-lg shadow-xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up </h1>
      <h1 className="text-5xl font-bold">your Bookself</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
      <Link to='/listed' href="#_" class="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">View The List</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>


    </div>
  </div>
</div>
        </div>
    );
};
// https://i.ibb.co/gJ8mfCc/sincerely-media-CXYPfveiuis-unsplash.jpg
export default Baneer;