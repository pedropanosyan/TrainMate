import NavSimple from "../components/NavSimple";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";


const divider = <div style={{paddingTop: '50px', backgroundColor:'#1b263b'}}/>


function Register(){
    return (
        <div className='Login' style={{background:'#222222'}}>
            <NavSimple/>
            {divider}
            <RegisterForm/>
            {divider}
            <Footer/>
        </div>
    )
}

export default Register;