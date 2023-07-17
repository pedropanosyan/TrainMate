import NavSimple from "../components/NavSimple";
import LoginForm from "../components/LoginForm";
import Slider from "../components/carousel";
import Footer from "../components/Footer";
import About from "../components/aboutUs";
import { Container, Row, Stack} from 'react-bootstrap'

const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>
const divider2 = <div style={{paddingTop: "3px", backgroundColor: "#8db5ff", maxWidth: '55%', margin: "auto"}}/>

function Login() {
    return (
        <div style={{ background:'#222222' }} >
        <Container fluid>
            <NavSimple/>
            {divider}

        <div>
            <Slider/>
        </div>

            {divider}
        <div>
            <About/>
        </div>
            {divider2}
        <div>
                <LoginForm/>
        </div>
            {divider}
            <Footer/>
            </Container>
            </div>
    )
}
export default Login;