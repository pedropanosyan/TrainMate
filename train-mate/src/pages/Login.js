import NavSimple from "../components/NavSimple";
import LoginForm from "../components/LoginForm";
import Slider from "../components/carousel";
import Footer from "../components/Footer";
import About from "../components/aboutUs";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>

function Login() {
    return (
        <div className='Login' style={{background:'#222222'}}>
            <NavSimple/>
            {divider}
            <Slider/>
            {divider}
            <LoginForm/>
            <About/>
            {divider}
            <Footer/>
        </div>
    )
}
export default Login;