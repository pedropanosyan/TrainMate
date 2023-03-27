import {Container, Nav, Navbar} from 'react-bootstrap';
import "../css/NavBar.css";

function NavBar() {
    return (
        <Navbar className="navbar" expand="md">
            <Container>
                <Navbar.Brand className="container-brand" href="#home">
                    <h1>Train<span>Mate</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle className="navbar-toggle-primary" aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-nav">
                        <Nav.Link href="#home"><p>Home</p></Nav.Link>
                        <Nav.Link href="#link"><p>Progress</p></Nav.Link>
                        <Nav.Link href="#link"><p>Routines</p></Nav.Link>
                        <Nav.Link href="#link"><p>Forum</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;