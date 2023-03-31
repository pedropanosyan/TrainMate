import {Navbar, Container, Image} from "react-bootstrap";

function NavSimple() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#212529' }}>
            <Container>
                <Navbar.Brand href="/login">
                    <h1 style={{color:'whitesmoke', fontSize:'3em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></h1>
                </Navbar.Brand>
                <Image src="Imagenes/logo2.png" style={{width:"100px", height:"100px"}}/>
            </Container>
        </Navbar>
    );
}

export default NavSimple;