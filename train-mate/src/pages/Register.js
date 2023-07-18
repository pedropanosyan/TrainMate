import NavSimple from "../components/NavSimple";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import NavBarRegister from "../components/navBarRegister";


const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>


function Register(){
    return (
        <div className='Login' style={{background:'#222222'}}>
            <NavBarRegister/>
            {divider}
            <RegisterForm/>
            {divider}
            <Footer/>
        </div>
    )
}

export default Register;