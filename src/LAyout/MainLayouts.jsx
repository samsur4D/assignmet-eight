import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Home from "../Pages/Home";
import Listed from "../Pages/Listed";
import PagesRead from "../Pages/PagesRead";
import Footer from "../Components/Footer";


const MainLayouts = () => {
    return (
        <div>
                        <div className="h-20">
                       <Nav></Nav>
                      </div>
                
                {/* <Home></Home>
                <Listed></Listed>
                <PagesRead></PagesRead> */}
                
                      {/* outlet  একটা প্যাকেট  */}
                      <div className="min-h-[calc(100vh-148px)]">
                      <Outlet></Outlet>
                      </div>
                <div className="mt-24">
                    <Footer></Footer>
                    </div> 
        </div>
    );
};

export default MainLayouts;