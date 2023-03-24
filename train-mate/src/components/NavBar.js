import {Container, Nav, Navbar} from 'react-bootstrap';
import "../css/NavBar.css";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='navBar-brand' href="#home">
                        <p>Train<span>Mate</span></p>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#progress">Progress</Nav.Link>
                        <Nav.Link href="#routines">Routines</Nav.Link>
                        <Nav.Link href="#forum">Forum</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;