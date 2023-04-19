import NavBar from "../components/NavBar.js";
import ForumHome from "./ForumHome";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Forum() {
    return (
        <div>
           <NavBar/>
            {divider}
            <ForumHome/>
        </div>
    )
}
export default Forum;