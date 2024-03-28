
import Baneer from "../Components/Baneer";
import { useEffect, useState } from "react";
import Card from "../Components/Card";


const Home = () => {
	
	
    return (
        <div>
                    <Baneer></Baneer>
                
                 <h1 className="text-3xl font-bold flex items-center justify-center mt-3">Books 📚📚</h1>
                 <hr className="mt-10"/>
                 

               
				<Card></Card>


                {/* <section className="dark:bg-gray-100 dark:text-gray-800">


	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

   {books.map((book)=>(
	        	<Link to='/details' key={book.id} rel="noopener noreferrer" href="#" className="border p-5 max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-80 rounded  h-48 dark:bg-gray-500"
                 src={book.image} />
                 <div className="flex gap-5">
                    <button className="bg-red-200 px-3 py-1 rounded-lg mt-5 font-bold text-green-900 ml-6">{book.tags[0]}</button>
                    <button className="bg-red-200 px-3 py-1 rounded-lg mt-5 font-bold text-green-900 ml-6">{book.tags[1]}</button>
                 </div>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl group-hover:underline group-focus:underline font-bold">{book.bookName}</h3>
					<span className="text-xl dark:text-black">By : {book.author}</span>
                    <hr />
					<div className="flex justify-between mt-10">
                        <button>{book.category}</button>
                        <div className="flex items-center gap-1">
                        <button>{book.rating}</button>
                        <MdOutlineStarRate className="text-xl"/>

                        </div>
                    </div>
				</div>
			</Link>
   ))}      
			

			
		</div>

		
        
	</div>
                 </section> */}

              
            
        </div>
    );
};

export default Home;