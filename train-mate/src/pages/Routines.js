import RoutineInput from "../components/RoutineInput";
import NavBar from "../components/NavBar";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Routines(){
    return(
        <div className='rout' style = {{background:'#222222'}}>
            <NavBar/>
            {divider}
            <RoutineInput/>
        </div>
    )
}
export default Routines;