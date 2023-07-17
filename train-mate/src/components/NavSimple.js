import {Navbar, Container, Image, Nav, NavDropdown} from "react-bootstrap";
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
        <Navbar bg='dark' expand="xl" style={{ backgroundColor: '#212529' }}>
            <Container>
                    <img
                        src="Imagenes/logo2.png"
                        alt="TrainMate logo"
                        width="60"
                        height="60"
                        className='d-inline block align top'
                        style={{marginRight: '10px', marginBottom: '7px'}}
                        /> 

                <Navbar.Brand className='navBar-brand' href="/login">
                    <p style={{color:'whitesmoke', fontSize:'3em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                </Navbar.Brand>

                        <Nav.Link style={linkStyle} onClick={handleClick}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}>
                              
                        <h2>Sign in</h2>
                    </Nav.Link>

            </Container>
        </Navbar>
    );

}

export default NavSimple;