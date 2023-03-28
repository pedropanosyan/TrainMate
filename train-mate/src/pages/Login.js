import NavSimple from "../components/NavSimple";
import LoginForm from "../components/LoginForm";
import Slider from "../components/carousel";
import Footer from "../components/Footer";
import About from "../components/aboutUs";

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>
const divider2 = <div style={{paddingTop: "3px", backgroundColor: "#8db5ff", maxWidth: '55%', margin: "auto"}}/>

function Login() {
    return (
        <div className='Login' style={{background:'#222222'}}>
            <NavSimple/>
            {divider}
            <Slider/>
            {divider}
            <About/>
            {divider2}
            <LoginForm/>
            {divider}
            <Footer/>
        </div>
    )
}
export default Login;