import NavBar from "../components/NavBar.js";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Forum() {
    return (
        <div style={{background:'#222222'}}>
           <NavBar/>
            {divider}
            <h1>Forum</h1>
        </div>
    )
}
export default Forum;