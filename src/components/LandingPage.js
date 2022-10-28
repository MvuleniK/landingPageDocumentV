
import Navbar from "./Navbar";
import Data from "./Data";
import Hero from "./Hero";
import Slide from "./Slide";
import  Footer  from "./Footer";
import { getAuth } from "firebase/auth";



function LandingPage() {
const auth=getAuth();
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Data/>
        <Slide/>
        <Footer/>
    </div>
  )
}

export default LandingPage;


