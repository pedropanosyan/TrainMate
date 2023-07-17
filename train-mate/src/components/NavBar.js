import {Container, Nav, Navbar,  NavDropdown} from 'react-bootstrap';
import axios from "axios";
import {useEffect, useState} from "react";



function NavBar() {

    const currentPath = window.location.pathname;
    const [user, setUser] = useState("");

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
    const toView = () => {
        window.location.assign("/view")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:8080/getUser', {
            headers: {
                token: token
                }
            })
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            <Navbar bg="dark" expand="xl" variant="dark" style={{backgroundColor:'#212529'}}>
                    <Container>                    
                    <img
                        src="Imagenes/logo2.png"
                        alt="TrainMate logo"
                        width="60"
                        height="60"
                        className='d-inline block align top'
                        style={{marginRight: '10px', marginBottom: '7px'}}
                        /> 
                    <Navbar.Brand className='navBar-brand' href="/home">
                         <p style={{color: '#f8f8f8', fontSize: '2em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                         </Navbar.Brand>

                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ color: 'white', fontSize: '1.4em', marginLeft: '30%', marginTop: '-10px', justifyContent: 'space-between' }}>
                            <Nav.Link className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} onClick={toHome} style={{ marginRight: '40px' }}>Home</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/routines' ? 'active' : ''}`} onClick={toRoutine} style={{ marginRight: '40px' }}>Routines</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/view' ? 'active' : ''}`} onClick={toView} style={{ marginRight: '40px' }}>Progress</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/forum' ? 'active' : ''}`} onClick={toForum} style={{ marginRight: '40px' }}>Forum</Nav.Link>
                            <NavDropdown title="Account" id="navbarScrollingDropdown">
                                <p style={{color: 'black', marginLeft: '10px'}}> Logged in as: {user}</p>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut} href="/login"> Sign Out </NavDropdown.Item>
        </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}

export default NavBar