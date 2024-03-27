import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Home from "../Pages/Home";
import Listed from "../Pages/Listed";
import PagesRead from "../Pages/PagesRead";


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
                      <Outlet></Outlet>
                 
        </div>
    );
};

export default MainLayouts;