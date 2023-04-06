import {Image} from "react-bootstrap";
import '../css/About.css'


function About() {
    return (
        <>
            <div className="h3 mx-2">
                <h4 style={{color:'whitesmoke', fontSize:'3em',marginLeft: "600px"}}>
                    About <span style={{color:'#8db5ff'}}>Us</span> </h4>
            </div>
            <div className= 'caja' style={{marginLeft: "200px"}}>
                <p style={{color:'whitesmoke'}}>Save your <span style={{color:'#8db5ff'}}><b> gym progress </b> </span> easily and track your workouts.
                    Check your <span style={{color:'#8db5ff',}}> <b>routines</b></span>, save your daily activity. Need motivation? Ask questions on the  <span style={{color:'#8db5ff',}}>
                        <b>forum</b></span> and get help from professionals. Trainmate makes your workouts easier and better.
                    Log in and start using this powerful tool.
                </p>
                <Image src="Imagenes/logo2.png"/>
            </div>
        </>
    )
}

export default About;