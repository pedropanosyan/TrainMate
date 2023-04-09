import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ChestExercises from "../components/muscles/chest";
import ShowChest from "../components/muscles/showChest";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Chest() {
    return (
        <div style={{background:'#222222'}}>
            <NavBar/>
            {divider}
            <ChestExercises/>
            <div style={{minHeight:'80vh'}}>
                <ShowChest/>
            </div>
            {divider}
            <Footer/>
        </div>
    )
}
export default Chest;