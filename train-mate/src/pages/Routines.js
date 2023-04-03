import Routine from "../components/Routine";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>


function Routines(){
    return(
        <div style={{backgroundColor:'#212529'}}>
            <Navbar/>
            <Routine/>
            {divider}
            <Footer/>
        </div>
    )
}
export default Routines;