import { ImLocation2 } from "react-icons/im";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";

const Author = () => {

  const wishArray = JSON.parse(localStorage.getItem("wishList"))
 console.log(wishArray);

    return (
 <>
    {/* ------------------------- */}
    <div  className="flex flex-col">
         
         {wishArray.map((book)=>(
           <div key={book.id} className="flex flex-col gap-5 container mt-10">
           <div className="relative flex flex-col mr-24 rounded-xl container mx-auto bg-purple-400 px-10 py-2 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
           
           <div className="flex items-center gap-3 p-3">
           <img alt="" src={book.image} className="object-cover w-96 h-60 dark:bg-gray-500 rounded shadow" />
           <div className="space-y-1">
           
           <div className="flex flex-wrap gap-3">
               
           </div>
           </div>
           </div>
           <div className="p-3 space-y-1 container">
           <h3 className="text-3xl font-semibold">{book.bookName}</h3>
           <p className="text-sm dark:text-gray-600">By :{book.author}</p>
           <section className="flex items-center justify-between">
           
           <div className="flex gap-4 mr-10 mt-4">
           <button>Tag</button>
           <button className="bg-blue-500 px-4 py-2 rounded-3xl">{book.tags[0]}</button>
           <button className="bg-blue-500 px-4 py-2 rounded-3xl">{book.tags[1]}</button>
           </div>
             
             <div className="mt-5">
             <h2 className="flex items-center">  <ImLocation2 className="text-xl mr-1"/> Year of Publishing : {book.yearOfPublishing}</h2>
             </div>
           </section>
           
           <div className="mt-5 flex gap-16">
           <div className="flex items-center">
           <h2 className="flex items-center gap-2">
            <LiaUserFriendsSolid className="text-3xl"/>Publisher :{book.publisher} </h2>
           </div>
           <div className="flex items-center">
           <h2 className="flex items-center gap-2"><MdInsertPageBreak className="text-3xl"/>Pages : {book.totalPages} </h2>
           </div>
           </div>
           <hr />
           
           <section className=" flex gap-4">
           <Link className="bg-blue-400 px-5 py-1 mt-4 rounded-lg text-white font-semibold">Catagory: {book.category}</Link>
           <Link className="bg-yellow-500 px-5 py-1 mt-4 rounded-lg text-white font-semibold">Rating: {book.rating}</Link>
           <Link className="bg-green-900 px-5 py-1 mt-4 rounded-lg text-white font-semibold">View Details</Link>
           </section>
           
           
           
           </div>
           
           </div>
           
           
                  
                                </div>
         ))}
         </div>
{/* ----------------------- */}


  </>
    );
};

export default Author;
// author