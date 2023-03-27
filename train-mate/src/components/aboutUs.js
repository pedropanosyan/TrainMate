import {Image} from "react-bootstrap";
import '../css/About.css'


function About() {
    return (
        <>
            <h1 style={{color:'whitesmoke', fontSize:'3em',marginLeft: "600px"}}>
                About <span style={{color:'#8db5ff'}}>Us</span>
            </h1>
    <div className= 'caja' style={{marginLeft: "200px"}}>
        <p>
            Guarda tu <span style={{color:'#8db5ff',}}><b> progreso </b> </span> en el gimnasio con facilidad y sigue tus entrenamientos. Mira tus  <span style={{color:'#8db5ff',}}> <b>rutinas</b></span> , guarda tu actividad de cada dia.
            Necesitas motivaciom? Haz preguntas en el  <span style={{color:'#8db5ff',}}>  <b>foro</b></span> y pide ayuda a profesionales. Trainmate facilita y mejora tus entrenamientos.
        </p>
        <Image src="Imagenes/logo2.png"/>
        </div>
        </>
    )
}

export default About;