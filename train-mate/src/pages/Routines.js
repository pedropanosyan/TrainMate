import Routine from "../components/Routine";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer";
import ShowRoutine from "../components/showRoutine";

const divider = <div style={{   paddingTop: '50px', backgroundColor:'#1b263b'}}/>
const divider2 = <div style={{ marginTop:'30px',  paddingTop: '50px', backgroundColor:'#1b263b'}}/>


function Routines(){
    return(
        <div style={{backgroundColor:'#212529'}}>
            <Navbar/>
            {divider}
            <Routine/>
            <div style={{minHeight:'50vh'}}>
                <ShowRoutine/>
            </div>
            {divider2}
            <Footer/>
        </div>
    )
}
export default Routines;