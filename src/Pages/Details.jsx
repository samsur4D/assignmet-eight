import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const {id} = useParams();
    const [booksD , setBooksD] = useState([]);
    const [readlist , setReadList] = useState([]);
    const [wishList , setWishList] = useState([]);
    
   
    useEffect(()=>{
		fetch('/books.json')
		.then(res => res.json())
		.then(data => setBooksD(data))
	},[])

    const singeldata = booksD.find(item => item.bookId == id)
    console.log(singeldata);
// --------------------------------------------------------------------------------------
const handleReadList = (item) => {
    const existingReadList = JSON.parse(localStorage.getItem("readList")) || [];
    
    const isNewArrayIncluded = existingReadList.some(book => book.bookId === item.bookId);
    
    if (isNewArrayIncluded) {
      console.log("The new array is already included in the main array.");
    //   alert('ok')
      toast.success('Already Added in the ReadList 😀')
    } else {
      const updatedReadList = [...existingReadList, item];
      
      setReadList(updatedReadList);
      
      localStorage.setItem("readList", JSON.stringify(updatedReadList));
      
      toast('Added in The Readist')
    }
  }
// -------------------------------------------------------------------------------------
const handleWishList = (item) => {
    const existingWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    
    const isNewArrayIncluded = existingWishList.some(book => book.bookId === item.bookId);
    const isNewArrayIncluded2 = wishList.some(book => book.bookId === item.bookId);
    
    if (isNewArrayIncluded) {
      console.log("The new array is already included in the main array.");
      toast("Already Added")
    } else if(isNewArrayIncluded2){
      toast("You added this in read list")
    } else {
      const updatedWishList = [...existingWishList, item];
      
      setWishList(updatedWishList);
      
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      
      toast("Added")
    }
  }
// -----------------------




    return (
        <div className="max-w-7xl mx-auto px-40  ml-20 min-h-[calc(100vh-196px)]">
                     {/* ------------- */}
      <div className="hero bg-gray-200 container flex items-center justify-center ml-28 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={singeldata?.image} className=" min-w-36 mr-5 rounded-lg shadow-2xl" />
    <div className="mb-10">
      <h1 className="text-5xl font-bold">{singeldata?.bookName}</h1>
      <h1 className="text-xl font-bold mb-3">By : {singeldata?.author}</h1>
      <hr />
      <p className="py-6">Review : {singeldata?.review}</p>
      
    <div className="flex justify-around ">
    <h1 className="text-xl font-bold">Tag</h1>
    <button className="bg-blue-800 px-5 py-2 rounded-md text-white font-bold">{singeldata?.tags[0]}</button>
    <button className="bg-blue-800 px-5 py-2 rounded-md text-white font-bold">{singeldata?.tags[1]}</button>
    </div>
    <br />
    <hr />
    <div>
         <div className="flex gap-20">
            <h2>Number Of Pages</h2>
            <h2 className="font-bold">{singeldata?.totalPages}</h2>
         </div>
         <div className="flex gap-36 mt-2">
         <h2>Publisher</h2>
            <h2 className="font-bold">{singeldata?.publisher}</h2>
         </div>
         <div className="flex gap-20 mt-2">
         <h2>Year of Publishing</h2>
            <h2 className="font-bold">{singeldata?.yearOfPublishing}</h2>
         </div>
         <div className="flex gap-40 mt-2">
         <h2>Rating</h2>
            <h2 className="font-bold">{singeldata?.rating}</h2>
         </div>
    </div>
                    <div className="mt-10 flex gap-5">
<Link onClick={()=>handleReadList(singeldata)}  className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Read</span>
</Link>
{/* ------------ */}
<Link onClick={()=>handleWishList(singeldata)}   className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">WishList</span>
</Link>
                    </div>
    </div>
  </div>
</div>
                     {/* -------------- */}
               <ToastContainer />       
        </div>
       
    );
};

export default Details;