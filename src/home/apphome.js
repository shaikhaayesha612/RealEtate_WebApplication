import { HashRouter, Routes, Route } from "react-router-dom";

import Publicheader from "./publicheader";
import Myhome from "./home";
import About from "./about";
import CityProperty from "./cityproperty";
import ResProperty from "./resproperty";
import CommProperty from "./commproperty";
import PlotProperty from "./plotproperty";
import ContactUs from "./contactus";
import Login from "./login";
import Signup from "./signup";
import Footer from "./footer";
import ReadMore from "../components/readMore";

const AppHome = () =>{
    return(
        <HashRouter>
            <Publicheader/>
            <Routes>
                <Route exact path="/" element={<Myhome/> } />
                <Route exact path="/about" element={<About/> } />
                <Route exact path="/cityproperty" element={<CityProperty/> } />
                <Route exact path="/resproperty" element={<ResProperty/> } />
                <Route exact path="/commproperty" element={<CommProperty/> } />
                <Route exact path="/plotproperty" element={<PlotProperty/> } />
                <Route exact path="/contactus" element={<ContactUs/> } />
                <Route exact path="/login" element={<Login/> } />
                <Route exact path="/signup" element={<Signup/> } />  
                <Route exact path="//readMore/:id" element={<ReadMore/> } />              
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default AppHome;