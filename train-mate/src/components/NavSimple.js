import {Navbar, Container, Image, Nav} from "react-bootstrap";
import {useState} from "react";

function    NavSimple() {

    const [hovered, setHovered] = useState(false);

    const linkStyle = {
        color: hovered ? '#8db5ff' : 'whitesmoke',
        transition: 'color 0.2s ease-in-out',
        cursor: 'pointer'
    };

    function handleClick(event) {
        event.preventDefault();
        document.getElementById('aca').scrollIntoView({behavior: 'smooth'});
    }
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#212529' }}>
            <Container>
                <Navbar.Brand href="/login">
                    <h1 style={{color:'whitesmoke', fontSize:'3em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></h1>
                </Navbar.Brand>
                <Image src="Imagenes/logo2.png" style={{width:"100px", height:"100px"}}/>
                <Nav className="me-auto" style={{fontSize: '1.4em', marginLeft: '700px', marginTop: '-5px'}}>
                    <Nav.Link style={linkStyle} onClick={handleClick}
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}>
                        <h2>Sign in</h2>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );

}

export default NavSimple;