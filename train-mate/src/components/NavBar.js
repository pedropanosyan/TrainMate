import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import axios from "axios";


function NavBar() {

    const currentPath = window.location.pathname;

    const handleSignOut = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
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

    const toForum = () => {
        window.location.assign("/forum");
    }

    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark" style={{backgroundColor:'#212529'}}>
                    <Container>                    
                    <img
                        src="Imagenes/logo2.png"
                        alt="TrainMate logo"
                        width="60"
                        height="60"
                        className='d-inline block align top'
                        style={{marginRight: '10px', marginBottom: '15px'}}
                        /> 
                    <Navbar.Brand className='navBar-brand' href="#home">
                         <p style={{color: '#f8f8f8', fontSize: '2em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                         </Navbar.Brand>

                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style = {{color: 'white', fontSize: '1.4em', marginRight: '0px', marginTop: '-12px'}}>
                            <Nav.Link className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} onClick={toHome} >Home</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/routines' ? 'active' : ''}`} onClick={toRoutine} >Routines</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/forum' ? 'active' : ''}`} onClick={toForum} >Forum</Nav.Link>
                            <Nav.Link onClick={handleSignOut} href="/login" >Sign Out</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}

export default NavBar