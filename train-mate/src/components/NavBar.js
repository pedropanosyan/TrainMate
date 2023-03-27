import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import "../css/NavBar.css";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='navBar-brand' href="#home">
                        <p>Train<span>Mate</span></p>
                    </Navbar.Brand>
                    <Image src="Imagenes/logo2.png" style={{width:"90px", height:"90px"}}/>
                    <Nav className="me-auto" style = {{color: 'white', fontSize: '1.4em', marginLeft: '200px', marginTop: '-25px'}}>
                        <Nav.Link href="#home"  style={{ marginRight: '80px' }}>Home</Nav.Link>
                        <Nav.Link href="#progress" style={{ marginRight: '80px' }}>Progress</Nav.Link>
                        <Nav.Link href="#routines" style={{ marginRight: '80px' }}>Routines</Nav.Link>
                        <Nav.Link href="#forum" style={{ marginRight: '80px'}}>Forum</Nav.Link>
                        <Nav.Link href="#signout" style= {{marginRight: '80px'}}>Sign Out</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar