import NavSimple from "../components/NavSimple";
import LoginForm from "../components/LoginForm";
import Slider from "../components/carousel";
import {Container} from "react-bootstrap";
import {Footer} from "../components/Footer";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Login() {
    return (
        <div className='Login' style={{background:'#222222'}}>
            <NavSimple/>
            {divider}
            <Slider/>
            {divider}
            <LoginForm/>
            {divider}
            <Footer/>
        </div>
    )
}
export default Login;