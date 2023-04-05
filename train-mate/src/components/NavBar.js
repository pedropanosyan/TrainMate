import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import "../css/NavBar.css";
import axios from "axios";


function NavBar() {

    const handleSignOut = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token);
        axios.post('http://localhost:8080/userSignOut', token)
            .then(function (response) {
                localStorage.clear();
                window.location.assign("/login");
            })
            .catch(function (error) {
            })
    }

    const toRoutine = () => {
      window.location.assign('/routines');
    }

    const toHome = () => {
      window.location.assign('/home');
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='navBar-brand' href="#home">
                        <p>Train<span>Mate</span></p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Image src="Imagenes/logo2.png" style={{width:"90px", height:"90px"}}/>
                        <Nav className="me-auto" style = {{color: 'white', fontSize: '1.4em', marginLeft: '200px', marginTop: '-25px'}}>
                            <Nav.Link onClick={toHome} style={{ marginRight: '70px', marginTop:'20px' }}>Home</Nav.Link>
                            <Nav.Link onClick={toRoutine} style={{ marginRight: '70px', marginTop:'20px' }}>Routines</Nav.Link>
                            <Nav.Link href="#forum" style={{ marginRight: '70px', marginTop:'20px'}}>Forum</Nav.Link>
                            <Nav.Link onClick={handleSignOut} href="/login" style= {{marginRight: '70px', marginTop:'20px'}}>Sign Out</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar