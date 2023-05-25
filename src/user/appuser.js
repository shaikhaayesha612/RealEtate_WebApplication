import { HashRouter, Routes, Route } from "react-router-dom";

import UserHeader from "./userheader";
import Dashboard from "./dashboard";
import CityProperty from "./cityproperty";
import ResProperty from "./resproperty";
import CommProperty from "./commproperty";
import PlotProperty from "./plotproperty";
import SavedProperty from "./savedproperty";
import ContactHistory from "./contacthistory";
import ReadMore from "../components/readMore";

const AppUser = () =>{
    return(
        <HashRouter>
            <UserHeader/>
            <Routes>
                <Route exact path="/" element={<Dashboard/> } /> 
                <Route exact path="/cityproperty" element={<CityProperty/>} />
                <Route exact path="/resproperty" element={<ResProperty/>} />
                <Route exact path="/commproperty" element={<CommProperty/>} />
                <Route exact path="/plotproperty" element={<PlotProperty/>} />
                <Route exact path="/savedproperty" element={<SavedProperty/>} /> 
                <Route exact path="/contacthistory" element={<ContactHistory/>} />  
                <Route exact path="/readMore/:id" element={<ReadMore/>} />
            </Routes>
        </HashRouter>
    )
}

export default AppUser;