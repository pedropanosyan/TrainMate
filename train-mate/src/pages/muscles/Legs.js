import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ShowTrains from "../../components/muscles/showTrains";
import AddTrain from "../../components/muscles/addTrain";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Legs() {
    return (
        <div style={{background:'#222222'}}>
            <NavBar/>
            {divider}
            <AddTrain muscle="Legs" />
            <div style={{minHeight:'80vh'}}>
                <ShowTrains muscle="Legs"/>
            </div>
            {divider}
            <Footer/>
        </div>
    )
}
export default Legs;