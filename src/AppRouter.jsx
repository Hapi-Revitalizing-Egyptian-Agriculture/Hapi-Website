
import { Component } from "react";
import Home from "./Components/Home.tsx";
import About from './Components/About.tsx';
//import UserPlans from './Components/UserPlans.jsx';
//import  Contact from './Components/Contact.jsx';
import ChooseCrop from "./Components/ChooseCrop.jsx";
import CropDiseases from "./Components/CropDiseases.jsx";
import DiseaseDetails from "./Components/DiseaseDetails.jsx";
import {Route,Routes} from "react-router-dom";
import CropDetails from "./Components/CropDetails.jsx";


class AppRouter extends Component {

    state = {

    }

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About"  element={<About />} />
                   {/* <Route path="/UserPlans"  element={<UserPlans />} />
                    <Route path="/ContactUs"  element={<Contact />} /> */}
                    <Route path="/Library"  element={<ChooseCrop />} />
                    <Route path="Library/:id"  element={<CropDetails/>} />
                    <Route path="/Library/:id/diseases"  element={<CropDiseases/>} />
                    <Route path="Library/:CropID/diseases/:DiseaseID"  element={<DiseaseDetails/>} />
                </Routes>
            </>
        );
    }
}

export default AppRouter;