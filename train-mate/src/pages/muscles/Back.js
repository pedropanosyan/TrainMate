import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ShowTrains from "../../components/muscles/showTrains";
import AddTrain from "../../components/muscles/addTrain";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Back() {
    return (
        <div style={{background:'#222222'}}>
            <NavBar/>
            {divider}
            <AddTrain muscle="Back" />
            <div style={{minHeight:'80vh'}}>
                <ShowTrains muscle="Back"/>
            </div>
            {divider}
            <Footer/>
        </div>
    )
}
export default Back;