import NavBar from "../components/NavBar";
import ChestExcercises from "../components/muscles/chest";


const divider = <div style={{paddingTop: "3px", backgroundColor: "#8db5ff", maxWidth: '55%', margin: "auto"}}/>

function Chest() {
    return (
        <div style={{background:'#222222'}}>
            <NavBar/>
            <h2>
                Chest Excercises
            </h2>
            <ChestExcercises/>
            {divider}
        </div>
    )
}
export default Chest;