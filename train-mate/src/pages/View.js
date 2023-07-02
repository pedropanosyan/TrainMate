import NavBar from "../components/NavBar";
import ViewCard from "../components/View";
import Footer from "../components/Footer";


const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function View(){

    return(
        <div style={{backgroundColor:'#212529'}}>
            <NavBar/>
            {divider}
            <div className="mt-5">
                <ViewCard/>
            </div>
            <div>
            {divider}
            </div>
            <Footer/>
        </div>
    )}


export default View;